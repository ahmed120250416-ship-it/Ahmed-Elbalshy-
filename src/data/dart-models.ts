/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const FLUTTER_DATABASE_HELPER_CODE = `import 'dart:async';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database? _database;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('egypt_world_cup_encyclopedia.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(
      path,
      version: 1,
      onCreate: _createDB,
      onConfigure: _onConfigure,
    );
  }

  Future _onConfigure(Database db) async {
    // Enable SQLite foreign key support
    await db.execute('PRAGMA foreign_keys = ON');
  }

  Future _createDB(Database db, int version) async {
    const idType = 'INTEGER PRIMARY KEY AUTOINCREMENT';
    const textType = 'TEXT NOT NULL';
    const textNullable = 'TEXT';
    const intType = 'INTEGER NOT NULL';
    const intNullable = 'INTEGER';
    const realNullable = 'REAL';

    // 1. Editions Table
    await db.execute('''
      CREATE TABLE editions (
        id $idType,
        year $intType UNIQUE,
        host $textType,
        start_date $textType,
        end_date $textType,
        winner $textType,
        egypt_position $textType,
        egypt_record $textType,
        total_teams $intType,
        summary $textType
      )
    ''');
    await db.execute('CREATE INDEX idx_editions_year ON editions (year);');

    // 2. Coaches Table
    await db.execute('''
      CREATE TABLE coaches (
        id $idType,
        name $textType,
        arabic_name $textType,
        nationality $textType,
        birth_date $textNullable,
        tactical_style $textNullable,
        biography $textNullable
      )
    ''');

    // 3. Players Table
    await db.execute('''
      CREATE TABLE players (
        id $idType,
        full_name $textType,
        arabic_name $textType,
        date_birth $textNullable,
        birth_place $textNullable,
        height_cm $intNullable,
        weight_kg $intNullable,
        position $textType,
        preferred_foot $textType,
        national_career_span $textNullable,
        club_career_summary $textNullable,
        world_cup_appearances INTEGER DEFAULT 0,
        goals INTEGER DEFAULT 0,
        assists INTEGER DEFAULT 0,
        minutes INTEGER DEFAULT 0,
        cards_count INTEGER DEFAULT 0,
        captain_caps INTEGER DEFAULT 0,
        biography $textType,
        achievements $textNullable,
        interesting_facts $textNullable,
        legacy $textNullable
      )
    ''');
    await db.execute('CREATE INDEX idx_players_position ON players (position);');
    await db.execute('CREATE INDEX idx_players_full_name ON players (full_name);');

    // 4. Clubs Table
    await db.execute('''
      CREATE TABLE clubs (
        id $idType,
        name $textType,
        arabic_name $textType,
        country $textType,
        founded_year $intNullable
      )
    ''');

    // 5. Player Career Table
    await db.execute('''
      CREATE TABLE player_career (
        id $idType,
        player_id $intType,
        club_id $intType,
        years $textType,
        appearances $intNullable,
        goals $intNullable,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE,
        FOREIGN KEY (club_id) REFERENCES clubs (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_career_player ON player_career (player_id);');

    // 6. Player World Cup Stats Table
    await db.execute('''
      CREATE TABLE player_world_cup_stats (
        id $idType,
        player_id $intType,
        edition_id $intType,
        jersey_number $intNullable,
        position $textNullable,
        caps INTEGER DEFAULT 0,
        starts INTEGER DEFAULT 0,
        minutes_played INTEGER DEFAULT 0,
        goals INTEGER DEFAULT 0,
        assists INTEGER DEFAULT 0,
        yellow_cards INTEGER DEFAULT 0,
        red_cards INTEGER DEFAULT 0,
        is_captain INTEGER DEFAULT 0,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE,
        FOREIGN KEY (edition_id) REFERENCES editions (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_wc_stats_player ON player_world_cup_stats (player_id);');
    await db.execute('CREATE INDEX idx_wc_stats_edition ON player_world_cup_stats (edition_id);');

    // 7. Qualification Campaigns Table
    await db.execute('''
      CREATE TABLE qualification_campaigns (
        id $idType,
        edition_id $intType,
        coach_id $intNullable,
        outcome $textType,
        summary $textNullable,
        FOREIGN KEY (edition_id) REFERENCES editions (id) ON DELETE CASCADE,
        FOREIGN KEY (coach_id) REFERENCES coaches (id) ON DELETE SET NULL
      )
    ''');

    // 8. Qualification Matches Table
    await db.execute('''
      CREATE TABLE qualification_matches (
        id $idType,
        campaign_id $intType,
        match_date $textType,
        opponent $textType,
        host_or_away $textType,
        egypt_score $intType,
        opponent_score $intType,
        scorers $textNullable,
        stadium $textNullable,
        attendance $intNullable,
        FOREIGN KEY (campaign_id) REFERENCES qualification_campaigns (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_qual_opponent ON qualification_matches (opponent);');

    // 9. Stadiums Table
    await db.execute('''
      CREATE TABLE stadiums (
        id $idType,
        name $textType,
        city $textType,
        country $textType,
        capacity $intNullable
      )
    ''');

    // 10. Referees Table
    await db.execute('''
      CREATE TABLE referees (
        id $idType,
        name $textType,
        arabic_name $textNullable,
        date_birth $textNullable,
        nationality $textType,
        fifa_badge_years $textNullable,
        world_cups $textNullable,
        matches_officiated $textNullable,
        role $textNullable,
        teams $textNullable,
        stadium $textNullable,
        stage $textNullable,
        career_summary $textNullable,
        awards $textNullable,
        interesting_facts $textNullable,
        legacy $textNullable
      )
    ''');

    // 11. Matches Table
    await db.execute('''
      CREATE TABLE matches (
        id $idType,
        edition_id $intType,
        match_date $textType,
        stage $textType,
        opponent $textType,
        egypt_score $intType,
        opponent_score $intType,
        stadium_id $intType,
        referee_id $intType,
        coach_id $intType,
        captain_id $intNullable,
        attendance $intNullable,
        egypt_formation $textType,
        opponent_formation $textType,
        match_status $textType,
        FOREIGN KEY (edition_id) REFERENCES editions (id) ON DELETE CASCADE,
        FOREIGN KEY (stadium_id) REFERENCES stadiums (id) ON DELETE RESTRICT,
        FOREIGN KEY (referee_id) REFERENCES referees (id) ON DELETE RESTRICT,
        FOREIGN KEY (coach_id) REFERENCES coaches (id) ON DELETE RESTRICT,
        FOREIGN KEY (captain_id) REFERENCES players (id) ON DELETE SET NULL
      )
    ''');
    await db.execute('CREATE INDEX idx_matches_edition ON matches (edition_id);');
    await db.execute('CREATE INDEX idx_matches_opponent ON matches (opponent);');

    // 12. Formations Table
    await db.execute('''
      CREATE TABLE formations (
        id $idType,
        name $textType UNIQUE,
        description $textNullable
      )
    ''');

    // 13. Lineups Table
    await db.execute('''
      CREATE TABLE lineups (
        id $idType,
        match_id $intType,
        player_id $intType,
        jersey_number $intNullable,
        position $textType,
        is_captain INTEGER DEFAULT 0,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_lineup_match ON lineups (match_id);');
    await db.execute('CREATE INDEX idx_lineup_player ON lineups (player_id);');

    // 14. Substitutions Table
    await db.execute('''
      CREATE TABLE substitutions (
        id $idType,
        match_id $intType,
        player_out_id $intType,
        player_in_id $intType,
        minute $intType,
        reason $textNullable,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE,
        FOREIGN KEY (player_out_id) REFERENCES players (id) ON DELETE CASCADE,
        FOREIGN KEY (player_in_id) REFERENCES players (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_sub_match ON substitutions (match_id);');

    // 15. Match Events Table
    await db.execute('''
      CREATE TABLE match_events (
        id $idType,
        match_id $intType,
        minute $intType,
        type $textType,
        player_id $intNullable,
        detail $textType,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE SET NULL
      )
    ''');
    await db.execute('CREATE INDEX idx_events_match ON match_events (match_id);');

    // 16. Player Match Stats Table
    await db.execute('''
      CREATE TABLE player_match_stats (
        id $idType,
        player_id $intType,
        match_id $intType,
        minutes_played INTEGER DEFAULT 0,
        goals_scored INTEGER DEFAULT 0,
        assists_provided INTEGER DEFAULT 0,
        yellow_cards INTEGER DEFAULT 0,
        red_cards INTEGER DEFAULT 0,
        rating $realNullable,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_m_stats_player ON player_match_stats (player_id);');
    await db.execute('CREATE INDEX idx_m_stats_match ON player_match_stats (match_id);');

    // 17. Goals Table
    await db.execute('''
      CREATE TABLE goals (
        id $idType,
        match_id $intType,
        player_id $intType,
        minute $intType,
        type $textType,
        description $textNullable,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE
      )
    ''');
    await db.execute('CREATE INDEX idx_goals_match ON goals (match_id);');
    await db.execute('CREATE INDEX idx_goals_player ON goals (player_id);');

    // 18. Assists Table
    await db.execute('''
      CREATE TABLE assists (
        id $idType,
        goal_id $intType,
        player_id $intType,
        type $textType,
        FOREIGN KEY (goal_id) REFERENCES goals (id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE
      )
    ''');

    // 19. Cards Table
    await db.execute('''
      CREATE TABLE cards (
        id $idType,
        match_id $intType,
        player_id $intType,
        card_type $textType,
        minute $intType,
        reason $textNullable,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE
      )
    ''');

    // 20. Penalties Table
    await db.execute('''
      CREATE TABLE penalties (
        id $idType,
        match_id $intType,
        player_id $intType,
        minute $intNullable,
        is_shootout INTEGER DEFAULT 0,
        outcome $textType,
        gk_opponent_name $textNullable,
        FOREIGN KEY (match_id) REFERENCES matches (id) ON DELETE CASCADE,
        FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE
      )
    ''');

    // 21. Records Table
    await db.execute('''
      CREATE TABLE records (
        id $idType,
        title $textType,
        description $textType,
        holder_name $textNullable,
        value $textNullable,
        edition_year $intNullable
      )
    ''');

    // 22. Stories Table
    await db.execute('''
      CREATE TABLE stories (
        id $idType,
        title $textType,
        story $textType,
        edition_year $intNullable,
        tags $textNullable
      )
    ''');

    // 23. Facts Table
    await db.execute('''
      CREATE TABLE facts (
        id $idType,
        category $textType,
        fact_text $textType,
        edition_year $intNullable
      )
    ''');

    // 24. Achievements Table
    await db.execute('''
      CREATE TABLE achievements (
        id $idType,
        title $textType,
        description $textType,
        year $intNullable
      )
    ''');

    // 25. Rankings Table
    await db.execute('''
      CREATE TABLE rankings (
        id $idType,
        year $intType,
        rank $intType,
        points $realNullable,
        notes $textNullable
      )
    ''');

    // 26. Favorites Table
    await db.execute('''
      CREATE TABLE favorites (
        id $idType,
        item_type $textType,
        item_id $intType,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    ''');
    await db.execute('CREATE INDEX idx_fav_lookup ON favorites (item_type, item_id);');

    // 27. Settings Table
    await db.execute('''
      CREATE TABLE settings (
        id $idType,
        key $textType UNIQUE,
        value $textType
      )
    ''');

    // Call seed method after table creations
    await _seedDatabase(db);
  }

  Future _seedDatabase(Database db) async {
    // Standard SQL scripts can be run sequentially here to pre-populate with Real Egypt World Cup History.
    // For production Flutter, you can execute individual db.insert() or run a packaged .sql asset.
  }

  Future<void> close() async {
    final db = await instance.database;
    db.close();
  }
}
`;

export const FLUTTER_PLAYER_MODEL_CODE = `class Player {
  final int? id;
  final String fullName;
  final String arabicName;
  final String? dateBirth;
  final String? birthPlace;
  final int? heightCm;
  final int? weightKg;
  final String position;
  final String preferredFoot;
  final String? nationalCareerSpan;
  final String? clubCareerSummary;
  final int worldCupAppearances;
  final int goals;
  final int assists;
  final int minutes;
  final int cardsCount;
  final int captainCaps;
  final String biography;
  final String? achievements;
  final String? interestingFacts;
  final String? legacy;

  Player({
    this.id,
    required this.fullName,
    required this.arabicName,
    this.dateBirth,
    this.birthPlace,
    this.heightCm,
    this.weightKg,
    required this.position,
    required this.preferredFoot,
    this.nationalCareerSpan,
    this.clubCareerSummary,
    this.worldCupAppearances = 0,
    this.goals = 0,
    this.assists = 0,
    this.minutes = 0,
    this.cardsCount = 0,
    this.captainCaps = 0,
    required this.biography,
    this.achievements,
    this.interestingFacts,
    this.legacy,
  });

  Player copyWith({
    int? id,
    String? fullName,
    String? arabicName,
    String? dateBirth,
    String? birthPlace,
    int? heightCm,
    int? weightKg,
    String? position,
    String? preferredFoot,
    String? nationalCareerSpan,
    String? clubCareerSummary,
    int? worldCupAppearances,
    int? goals,
    int? assists,
    int? minutes,
    int? cardsCount,
    int? captainCaps,
    String? biography,
    String? achievements,
    String? interestingFacts,
    String? legacy,
  }) {
    return Player(
      id: id ?? this.id,
      fullName: fullName ?? this.fullName,
      arabicName: arabicName ?? this.arabicName,
      dateBirth: dateBirth ?? this.dateBirth,
      birthPlace: birthPlace ?? this.birthPlace,
      heightCm: heightCm ?? this.heightCm,
      weightKg: weightKg ?? this.weightKg,
      position: position ?? this.position,
      preferredFoot: preferredFoot ?? this.preferredFoot,
      nationalCareerSpan: nationalCareerSpan ?? this.nationalCareerSpan,
      clubCareerSummary: clubCareerSummary ?? this.clubCareerSummary,
      worldCupAppearances: worldCupAppearances ?? this.worldCupAppearances,
      goals: goals ?? this.goals,
      assists: assists ?? this.assists,
      minutes: minutes ?? this.minutes,
      cardsCount: cardsCount ?? this.cardsCount,
      captainCaps: captainCaps ?? this.captainCaps,
      biography: biography ?? this.biography,
      achievements: achievements ?? this.achievements,
      interestingFacts: interestingFacts ?? this.interestingFacts,
      legacy: legacy ?? this.legacy,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'full_name': fullName,
      'arabic_name': arabicName,
      'date_birth': dateBirth,
      'birth_place': birthPlace,
      'height_cm': heightCm,
      'weight_kg': weightKg,
      'position': position,
      'preferred_foot': preferredFoot,
      'national_career_span': nationalCareerSpan,
      'club_career_summary': clubCareerSummary,
      'world_cup_appearances': worldCupAppearances,
      'goals': goals,
      'assists': assists,
      'minutes': minutes,
      'cards_count': cardsCount,
      'captain_caps': captainCaps,
      'biography': biography,
      'achievements': achievements,
      'interesting_facts': interestingFacts,
      'legacy': legacy,
    };
  }

  factory Player.fromMap(Map<String, dynamic> map) {
    return Player(
      id: map['id'] as int?,
      fullName: map['full_name'] as String,
      arabicName: map['arabic_name'] as String,
      dateBirth: map['date_birth'] as String?,
      birthPlace: map['birth_place'] as String?,
      heightCm: map['height_cm'] as int?,
      weightKg: map['weight_kg'] as int?,
      position: map['position'] as String,
      preferredFoot: map['preferred_foot'] as String,
      nationalCareerSpan: map['national_career_span'] as String?,
      clubCareerSummary: map['club_career_summary'] as String?,
      worldCupAppearances: map['world_cup_appearances'] as int? ?? 0,
      goals: map['goals'] as int? ?? 0,
      assists: map['assists'] as int? ?? 0,
      minutes: map['minutes'] as int? ?? 0,
      cardsCount: map['cards_count'] as int? ?? 0,
      captainCaps: map['captain_caps'] as int? ?? 0,
      biography: map['biography'] as String,
      achievements: map['achievements'] as String?,
      interestingFacts: map['interesting_facts'] as String?,
      legacy: map['legacy'] as String?,
    );
  }
}
`;

export const FLUTTER_MATCH_MODEL_CODE = `class MatchModel {
  final int? id;
  final int editionId;
  final String matchDate;
  final String stage;
  final String opponent;
  final int egyptScore;
  final int opponentScore;
  final int stadiumId;
  final int refereeId;
  final int coachId;
  final int? captainId;
  final int? attendance;
  final String egyptFormation;
  final String opponentFormation;
  final String matchStatus;

  MatchModel({
    this.id,
    required this.editionId,
    required this.matchDate,
    required this.stage,
    required this.opponent,
    required this.egyptScore,
    required this.opponentScore,
    required this.stadiumId,
    required this.refereeId,
    required this.coachId,
    this.captainId,
    this.attendance,
    required this.egyptFormation,
    required this.opponentFormation,
    required this.matchStatus,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'edition_id': editionId,
      'match_date': matchDate,
      'stage': stage,
      'opponent': opponent,
      'egypt_score': egyptScore,
      'opponent_score': opponentScore,
      'stadium_id': stadiumId,
      'referee_id': refereeId,
      'coach_id': coachId,
      'captain_id': captainId,
      'attendance': attendance,
      'egypt_formation': egyptFormation,
      'opponent_formation': opponentFormation,
      'match_status': matchStatus,
    };
  }

  factory MatchModel.fromMap(Map<String, dynamic> map) {
    return MatchModel(
      id: map['id'] as int?,
      editionId: map['edition_id'] as int,
      matchDate: map['match_date'] as String,
      stage: map['stage'] as String,
      opponent: map['opponent'] as String,
      egyptScore: map['egypt_score'] as int,
      opponentScore: map['opponent_score'] as int,
      stadiumId: map['stadium_id'] as int,
      refereeId: map['referee_id'] as int,
      coachId: map['coach_id'] as int,
      captainId: map['captain_id'] as int?,
      attendance: map['attendance'] as int?,
      egyptFormation: map['egypt_formation'] as String,
      opponentFormation: map['opponent_formation'] as String,
      matchStatus: map['match_status'] as String,
    );
  }
}
`;
