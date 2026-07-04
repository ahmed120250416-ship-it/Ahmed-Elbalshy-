/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ColumnDefinition {
  name: string;
  type: string;
  constraints?: string;
  description: string;
}

export interface TableMetaData {
  tableName: string;
  description: string;
  columns: ColumnDefinition[];
  foreignKeys: string[];
  indexes: string[];
}

export const DB_TABLES: TableMetaData[] = [
  {
    tableName: "editions",
    description: "Hosts general information for each FIFA World Cup edition Egypt has participated in (1934, 1990, 2018).",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Unique identifier for the edition" },
      { name: "year", type: "INTEGER", constraints: "NOT NULL UNIQUE", description: "The year of the tournament (e.g. 1934, 1990, 2018)" },
      { name: "host", type: "TEXT", constraints: "NOT NULL", description: "Host nation(s) of the tournament" },
      { name: "start_date", type: "TEXT", constraints: "NOT NULL", description: "Tournament opening match date" },
      { name: "end_date", type: "TEXT", constraints: "NOT NULL", description: "Tournament final match date" },
      { name: "winner", type: "TEXT", constraints: "NOT NULL", description: "Tournament champion country" },
      { name: "egypt_position", type: "TEXT", constraints: "NOT NULL", description: "Egypt's final standing / round reached" },
      { name: "egypt_record", type: "TEXT", constraints: "NOT NULL", description: "Egypt's overall record (Wins, Draws, Losses, Goals For/Against)" },
      { name: "total_teams", type: "INTEGER", constraints: "NOT NULL", description: "Number of participating countries in that edition" },
      { name: "summary", type: "TEXT", constraints: "NOT NULL", description: "Detailed historical narrative of Egypt's participation in this edition" }
    ],
    foreignKeys: [],
    indexes: ["idx_editions_year"]
  },
  {
    tableName: "coaches",
    description: "Details the tacticians who led the Pharaohs in World Cup matches and campaigns.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Unique identifier for the coach" },
      { name: "name", type: "TEXT", constraints: "NOT NULL", description: "English name of the manager" },
      { name: "arabic_name", type: "TEXT", constraints: "NOT NULL", description: "Arabic name of the manager" },
      { name: "nationality", type: "TEXT", constraints: "NOT NULL", description: "Nationality of the coach" },
      { name: "birth_date", type: "TEXT", description: "Coach date of birth" },
      { name: "tactical_style", type: "TEXT", description: "Favored formations, tactics, or coaching philosophy" },
      { name: "biography", type: "TEXT", description: "General professional career history and achievements" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "players",
    description: "Detailed historical directory of every Egyptian footballer who was called up or featured in a World Cup squad.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Unique identifier for the player" },
      { name: "full_name", type: "TEXT", constraints: "NOT NULL", description: "Full legal/professional English name" },
      { name: "arabic_name", type: "TEXT", constraints: "NOT NULL", description: "Arabic spelling of the player's name" },
      { name: "date_birth", type: "TEXT", description: "Player's date of birth (YYYY-MM-DD)" },
      { name: "birth_place", type: "TEXT", description: "City and region of birth" },
      { name: "height_cm", type: "INTEGER", description: "Height in centimeters" },
      { name: "weight_kg", type: "INTEGER", description: "Weight in kilograms" },
      { name: "position", type: "TEXT", constraints: "NOT NULL", description: "Primary role (Goalkeeper, Defender, Midfielder, Forward)" },
      { name: "preferred_foot", type: "TEXT", constraints: "NOT NULL", description: "Dominant playing foot (Right, Left, Ambidextrous)" },
      { name: "national_career_span", type: "TEXT", description: "Years active in national jersey (e.g. '2011–2021')" },
      { name: "club_career_summary", type: "TEXT", description: "Summarized list of key clubs represented" },
      { name: "world_cup_appearances", type: "INTEGER", constraints: "DEFAULT 0", description: "Total World Cup matches played" },
      { name: "goals", type: "INTEGER", constraints: "DEFAULT 0", description: "Total World Cup goals scored" },
      { name: "assists", type: "INTEGER", constraints: "DEFAULT 0", description: "Total World Cup assists recorded" },
      { name: "minutes", type: "INTEGER", constraints: "DEFAULT 0", description: "Total World Cup minutes played" },
      { name: "cards_count", type: "INTEGER", constraints: "DEFAULT 0", description: "Total World Cup card bookings (Yellow/Red)" },
      { name: "captain_caps", type: "INTEGER", constraints: "DEFAULT 0", description: "Number of World Cup matches playing as captain" },
      { name: "biography", type: "TEXT", constraints: "NOT NULL", description: "Deep editorial biography and legacy summary" },
      { name: "achievements", type: "TEXT", description: "List of honors, cups, and personal awards" },
      { name: "interesting_facts", type: "TEXT", description: "Anecdotes and trivia" },
      { name: "legacy", type: "TEXT", description: "The player's enduring impact on Egyptian football" },
      { name: "shirt_number", type: "INTEGER", description: "Shirt number worn in the World Cup" },
      { name: "club_during_tournament", type: "TEXT", description: "Club represented during the World Cup" },
      { name: "club_during_tournament_ar", type: "TEXT", description: "Arabic name of the club represented during the World Cup" },
      { name: "age_during_tournament", type: "INTEGER", description: "Age during the tournament" },
      { name: "played_status", type: "TEXT", description: "Whether the player played or remained unused" },
      { name: "played_status_ar", type: "TEXT", description: "Whether the player played or remained unused in Arabic" },
      { name: "yellow_cards", type: "INTEGER", constraints: "DEFAULT 0", description: "Yellow cards received in World Cups" },
      { name: "red_cards", type: "INTEGER", constraints: "DEFAULT 0", description: "Red cards received in World Cups" },
      { name: "is_captain", type: "INTEGER", constraints: "DEFAULT 0", description: "Whether the player was captain (1 for yes, 0 for no)" },
      { name: "edition_year", type: "INTEGER", description: "World Cup edition year (e.g. 1934, 1990, 2018)" }
    ],
    foreignKeys: [],
    indexes: ["idx_players_position", "idx_players_full_name"]
  },
  {
    tableName: "clubs",
    description: "Clubs that Egyptian players belonged to during their careers or at the time of World Cups.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Unique club ID" },
      { name: "name", type: "TEXT", constraints: "NOT NULL", description: "English name of the football club" },
      { name: "arabic_name", type: "TEXT", constraints: "NOT NULL", description: "Arabic spelling of the club's name" },
      { name: "country", type: "TEXT", constraints: "NOT NULL", description: "Country where the club is based" },
      { name: "founded_year", type: "INTEGER", description: "Year the club was established" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "player_career",
    description: "Tracks club histories of national players over their active playing careers.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Unique career entry ID" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the player" },
      { name: "club_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the club" },
      { name: "years", type: "TEXT", constraints: "NOT NULL", description: "The year span (e.g. '2010–2012')" },
      { name: "appearances", type: "INTEGER", description: "Appearances made for this club" },
      { name: "goals", type: "INTEGER", description: "Goals scored for this club" }
    ],
    foreignKeys: [
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE",
      "FOREIGN KEY(club_id) REFERENCES clubs(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_career_player"]
  },
  {
    tableName: "player_world_cup_stats",
    description: "Summarizes a player's official metrics for a specific World Cup tournament edition.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Unique stats card ID" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the player" },
      { name: "edition_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the tournament edition" },
      { name: "jersey_number", type: "INTEGER", description: "Jersey number worn in this tournament" },
      { name: "position", type: "TEXT", description: "Position assigned in this tournament" },
      { name: "caps", type: "INTEGER", constraints: "DEFAULT 0", description: "Appearances in this edition" },
      { name: "starts", type: "INTEGER", constraints: "DEFAULT 0", description: "Matches started in this edition" },
      { name: "minutes_played", type: "INTEGER", constraints: "DEFAULT 0", description: "Minutes played in this edition" },
      { name: "goals", type: "INTEGER", constraints: "DEFAULT 0", description: "Goals scored in this edition" },
      { name: "assists", type: "INTEGER", constraints: "DEFAULT 0", description: "Assists provided in this edition" },
      { name: "yellow_cards", type: "INTEGER", constraints: "DEFAULT 0", description: "Yellow cards received" },
      { name: "red_cards", type: "INTEGER", constraints: "DEFAULT 0", description: "Red cards received" },
      { name: "is_captain", type: "INTEGER", constraints: "DEFAULT 0", description: "Wore the captain armband? (1 for yes, 0 for no)" }
    ],
    foreignKeys: [
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE",
      "FOREIGN KEY(edition_id) REFERENCES editions(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_wc_stats_player", "idx_wc_stats_edition"]
  },
  {
    tableName: "qualification_campaigns",
    description: "Defines the qualification phases Egypt underwent to secure entry to the World Cup.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Campaign ID" },
      { name: "edition_id", type: "INTEGER", constraints: "NOT NULL", description: "The targeted World Cup edition" },
      { name: "coach_id", type: "INTEGER", description: "Coach who managed the qualification campaign" },
      { name: "outcome", type: "TEXT", constraints: "NOT NULL", description: "Result (Qualified, Did not qualify)" },
      { name: "summary", type: "TEXT", description: "Paragraph summarising matches, obstacles, and crowning moments" }
    ],
    foreignKeys: [
      "FOREIGN KEY(edition_id) REFERENCES editions(id) ON DELETE CASCADE",
      "FOREIGN KEY(coach_id) REFERENCES coaches(id) ON DELETE SET NULL"
    ],
    indexes: []
  },
  {
    tableName: "qualification_matches",
    description: "Matches played by Egypt during qualifying campaigns.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Qualifying match ID" },
      { name: "campaign_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the qualification campaign" },
      { name: "match_date", type: "TEXT", constraints: "NOT NULL", description: "Date of play" },
      { name: "opponent", type: "TEXT", constraints: "NOT NULL", description: "Opponent nation" },
      { name: "host_or_away", type: "TEXT", constraints: "NOT NULL", description: "Match context ('Home', 'Away', 'Neutral')" },
      { name: "egypt_score", type: "INTEGER", constraints: "NOT NULL", description: "Goals scored by Egypt" },
      { name: "opponent_score", type: "INTEGER", constraints: "NOT NULL", description: "Goals scored by opponent" },
      { name: "scorers", type: "TEXT", description: "Comma-separated list of Egyptian scorers" },
      { name: "stadium", type: "TEXT", description: "Stadium hosting the match" },
      { name: "attendance", type: "INTEGER", description: "Spectator attendance count" }
    ],
    foreignKeys: [
      "FOREIGN KEY(campaign_id) REFERENCES qualification_campaigns(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_qual_opponent"]
  },
  {
    tableName: "stadiums",
    description: "Venues where Egypt played World Cup matches.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Stadium ID" },
      { name: "name", type: "TEXT", constraints: "NOT NULL", description: "Full name of the stadium" },
      { name: "city", type: "TEXT", constraints: "NOT NULL", description: "City where the stadium is located" },
      { name: "country", type: "TEXT", constraints: "NOT NULL", description: "Country hosting the stadium" },
      { name: "capacity", type: "INTEGER", description: "Total seating capacity" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "referees",
    description: "Egyptian Referees in FIFA World Cup history (and match officials who oversaw Egypt's finals matches).",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Referee ID" },
      { name: "name", type: "TEXT", constraints: "NOT NULL", description: "Name of the referee (English)" },
      { name: "arabic_name", type: "TEXT", description: "Arabic spelling of the referee's name" },
      { name: "date_birth", type: "TEXT", description: "Date of birth (YYYY-MM-DD)" },
      { name: "nationality", type: "TEXT", constraints: "NOT NULL", description: "Nationality of the referee" },
      { name: "fifa_badge_years", type: "TEXT", description: "Years holding the official FIFA referee badge" },
      { name: "world_cups", type: "TEXT", description: "World Cup editions participated in" },
      { name: "matches_officiated", type: "TEXT", description: "World Cup matches officiated or assisted" },
      { name: "role", type: "TEXT", description: "Main role during World Cups (Referee, Assistant Referee, Fourth Official)" },
      { name: "teams", type: "TEXT", description: "Teams in matches officiated" },
      { name: "stadium", type: "TEXT", description: "Stadiums where matches were officiated" },
      { name: "stage", type: "TEXT", description: "Stages of matches officiated (e.g., Group Stage, Quarter-Final)" },
      { name: "career_summary", type: "TEXT", description: "Overview of professional achievements and refereeing journey" },
      { name: "awards", type: "TEXT", description: "Honours, medals, or distinctions received" },
      { name: "interesting_facts", type: "TEXT", description: "Interesting anecdotes or trivia" },
      { name: "legacy", type: "TEXT", description: "Enduring impact on football officiating standards" }
    ],
    foreignKeys: [],
    indexes: ["idx_referees_nationality"]
  },
  {
    tableName: "matches",
    description: "Official final tournament matches played by Egypt in the World Cup finals.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "World Cup finals match ID" },
      { name: "edition_id", type: "INTEGER", constraints: "NOT NULL", description: "World Cup edition" },
      { name: "match_date", type: "TEXT", constraints: "NOT NULL", description: "Match date (YYYY-MM-DD)" },
      { name: "stage", type: "TEXT", constraints: "NOT NULL", description: "Stage of the tournament (e.g. Group Stage, Round of 16)" },
      { name: "opponent", type: "TEXT", constraints: "NOT NULL", description: "Name of the opponent country" },
      { name: "egypt_score", type: "INTEGER", constraints: "NOT NULL", description: "Final Egypt goal count" },
      { name: "opponent_score", type: "INTEGER", constraints: "NOT NULL", description: "Final opponent goal count" },
      { name: "stadium_id", type: "INTEGER", constraints: "NOT NULL", description: "Host venue" },
      { name: "referee_id", type: "INTEGER", constraints: "NOT NULL", description: "Match referee" },
      { name: "coach_id", type: "INTEGER", constraints: "NOT NULL", description: "Pharaohs manager in charge" },
      { name: "captain_id", type: "INTEGER", description: "Player captaining Egypt on the field" },
      { name: "attendance", type: "INTEGER", description: "Official spectator count" },
      { name: "egypt_formation", type: "TEXT", constraints: "NOT NULL", description: "Tactical shape used by Egypt (e.g. '2-3-5', '4-2-3-1')" },
      { name: "opponent_formation", type: "TEXT", constraints: "NOT NULL", description: "Tactical shape used by the opponent" },
      { name: "match_status", type: "TEXT", constraints: "NOT NULL", description: "Match result for Egypt ('Win', 'Draw', 'Loss')" }
    ],
    foreignKeys: [
      "FOREIGN KEY(edition_id) REFERENCES editions(id) ON DELETE CASCADE",
      "FOREIGN KEY(stadium_id) REFERENCES stadiums(id) ON DELETE RESTRICT",
      "FOREIGN KEY(referee_id) REFERENCES referees(id) ON DELETE RESTRICT",
      "FOREIGN KEY(coach_id) REFERENCES coaches(id) ON DELETE RESTRICT",
      "FOREIGN KEY(captain_id) REFERENCES players(id) ON DELETE SET NULL"
    ],
    indexes: ["idx_matches_edition", "idx_matches_opponent"]
  },
  {
    tableName: "formations",
    description: "Dictionary of strategic football formations and layouts.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Formation ID" },
      { name: "name", type: "TEXT", constraints: "NOT NULL UNIQUE", description: "Name of layout (e.g., '4-4-2', '2-3-5', '4-2-3-1')" },
      { name: "description", type: "TEXT", description: "General explanation of the defensive, midfield, and attacking balances" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "lineups",
    description: "The starting XI players deployed on the pitch for each match.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Lineup node ID" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "World Cup match" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "Starting player" },
      { name: "jersey_number", type: "INTEGER", description: "Jersey number worn" },
      { name: "position", type: "TEXT", constraints: "NOT NULL", description: "Tactical slot occupied on the field in this game" },
      { name: "is_captain", type: "INTEGER", constraints: "DEFAULT 0", description: "Wore captain's armband in this game? (1 or 0)" }
    ],
    foreignKeys: [
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_lineup_match", "idx_lineup_player"]
  },
  {
    tableName: "substitutions",
    description: "In-match tactical roster replacements.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Substitution ID" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "World Cup match" },
      { name: "player_out_id", type: "INTEGER", constraints: "NOT NULL", description: "Player subbed off" },
      { name: "player_in_id", type: "INTEGER", constraints: "NOT NULL", description: "Player subbed on" },
      { name: "minute", type: "INTEGER", constraints: "NOT NULL", description: "Game minute of substitution" },
      { name: "reason", type: "TEXT", description: "Tactical, Injury, or Fatigue reason" }
    ],
    foreignKeys: [
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_out_id) REFERENCES players(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_in_id) REFERENCES players(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_sub_match"]
  },
  {
    tableName: "match_events",
    description: "A chronological feed of important actions inside matches (cards, goals, tactical points).",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Event ID" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "The match in focus" },
      { name: "minute", type: "INTEGER", constraints: "NOT NULL", description: "Minute of occurrence" },
      { name: "type", type: "TEXT", constraints: "NOT NULL", description: "Category of action (Goal, Card, Substitution, Penalty Save, Injury)" },
      { name: "player_id", type: "INTEGER", description: "Main player involved" },
      { name: "detail", type: "TEXT", constraints: "NOT NULL", description: "Descriptive comment about the incident" }
    ],
    foreignKeys: [
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE SET NULL"
    ],
    indexes: ["idx_events_match"]
  },
  {
    tableName: "player_match_stats",
    description: "Highly detailed tracking of individual player metrics during specific finals matches.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Match stat ID" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the player" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the match" },
      { name: "minutes_played", type: "INTEGER", constraints: "DEFAULT 0", description: "Total playing time in minutes" },
      { name: "goals_scored", type: "INTEGER", constraints: "DEFAULT 0", description: "Goals scored in this match" },
      { name: "assists_provided", type: "INTEGER", constraints: "DEFAULT 0", description: "Assists registered in this match" },
      { name: "yellow_cards", type: "INTEGER", constraints: "DEFAULT 0", description: "Booked with yellow? (0 or 1)" },
      { name: "red_cards", type: "INTEGER", constraints: "DEFAULT 0", description: "Sent off? (0 or 1)" },
      { name: "rating", type: "REAL", description: "Historical editorial player rating (1.0 to 10.0 scale)" }
    ],
    foreignKeys: [
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE",
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_m_stats_player", "idx_m_stats_match"]
  },
  {
    tableName: "goals",
    description: "Detailed database of every tournament goal scored by Egypt in World Cup finals.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Goal ID" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "Match when goal occurred" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "The goalscorer" },
      { name: "minute", type: "INTEGER", constraints: "NOT NULL", description: "Exact minute of the goal" },
      { name: "type", type: "TEXT", constraints: "NOT NULL", description: "Type (Open Play, Penalty, Header, Free Kick, Own Goal)" },
      { name: "description", type: "TEXT", description: "Text narrative of how the goal was structured" }
    ],
    foreignKeys: [
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE"
    ],
    indexes: ["idx_goals_match", "idx_goals_player"]
  },
  {
    tableName: "assists",
    description: "Documents the assist details backing Egyptian goals.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Assist ID" },
      { name: "goal_id", type: "INTEGER", constraints: "NOT NULL", description: "Reference to the goal set up" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "The playmaker providing the assist" },
      { name: "type", type: "TEXT", constraints: "NOT NULL", description: "Type of assist (Cross, Pass, Through Ball, Deflection)" }
    ],
    foreignKeys: [
      "FOREIGN KEY(goal_id) REFERENCES goals(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE"
    ],
    indexes: []
  },
  {
    tableName: "cards",
    description: "Official disciplinary bookings (yellow and red cards) handed to Egypt players.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Booking ID" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "Match reference" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "Player booked" },
      { name: "card_type", type: "TEXT", constraints: "NOT NULL", description: "Discipline type ('Yellow', 'Red')" },
      { name: "minute", type: "INTEGER", constraints: "NOT NULL", description: "Minute of penalty" },
      { name: "reason", type: "TEXT", description: "Infraction reason (Foul, Argument, Time Wasting)" }
    ],
    foreignKeys: [
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE"
    ],
    indexes: []
  },
  {
    tableName: "penalties",
    description: "All in-game penalty kicks and penalty shootout outcomes.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Penalty ID" },
      { name: "match_id", type: "INTEGER", constraints: "NOT NULL", description: "Match context" },
      { name: "player_id", type: "INTEGER", constraints: "NOT NULL", description: "Penalty taker" },
      { name: "minute", type: "INTEGER", description: "Minute if in-game, null if shootout" },
      { name: "is_shootout", type: "INTEGER", constraints: "DEFAULT 0", description: "Part of penalty shootout? (1 or 0)" },
      { name: "outcome", type: "TEXT", constraints: "NOT NULL", description: "Outcome ('Scored', 'Saved', 'Missed', 'Post/Bar')" },
      { name: "gk_opponent_name", type: "TEXT", description: "Name of opposing goalkeeper" }
    ],
    foreignKeys: [
      "FOREIGN KEY(match_id) REFERENCES matches(id) ON DELETE CASCADE",
      "FOREIGN KEY(player_id) REFERENCES players(id) ON DELETE CASCADE"
    ],
    indexes: []
  },
  {
    tableName: "records",
    description: "Historical milestones, records, and statistics held by Egyptian players or the squad.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Record ID" },
      { name: "title", type: "TEXT", constraints: "NOT NULL", description: "Title of the record" },
      { name: "description", type: "TEXT", constraints: "NOT NULL", description: "Detailed description of the milestone" },
      { name: "holder_name", type: "TEXT", description: "Player or team holding the record" },
      { name: "value", type: "TEXT", description: "Record value (e.g., '45 years, 161 days')" },
      { name: "edition_year", type: "INTEGER", description: "World Cup year of creation (if applicable)" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "stories",
    description: "Rich editorial write-ups capturing the spirit, context, and emotion of Egypt's World Cup history.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Story ID" },
      { name: "title", type: "TEXT", constraints: "NOT NULL", description: "Title of the historical story" },
      { name: "story", type: "TEXT", constraints: "NOT NULL", description: "Complete prose narrative" },
      { name: "edition_year", type: "INTEGER", description: "Associated World Cup edition" },
      { name: "tags", type: "TEXT", description: "Comma-separated search tags (e.g. 'Drama, Penalty, Legend')" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "facts",
    description: "Quick, fun, and trivia-based facts about Egypt in the World Cups.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Fact ID" },
      { name: "category", type: "TEXT", constraints: "NOT NULL", description: "Classification (e.g. 'Age', 'Goal', 'Qualifying')" },
      { name: "fact_text", type: "TEXT", constraints: "NOT NULL", description: "The interesting piece of trivia" },
      { name: "edition_year", type: "INTEGER", description: "World Cup year associated with the fact" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "achievements",
    description: "General honours, accolades, and notable achievements of Egypt internationally.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Achievement ID" },
      { name: "title", type: "TEXT", constraints: "NOT NULL", description: "Title of achievement" },
      { name: "description", type: "TEXT", constraints: "NOT NULL", description: "Description of what makes this notable" },
      { name: "year", type: "INTEGER", description: "Calendar year accomplished" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "rankings",
    description: "Fifa/Historical rankings of Egypt during World Cup periods.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Ranking node ID" },
      { name: "year", type: "INTEGER", constraints: "NOT NULL", description: "Year of rank reference" },
      { name: "rank", type: "INTEGER", constraints: "NOT NULL", description: "Official rank number" },
      { name: "points", type: "REAL", description: "Ranking points" },
      { name: "notes", type: "TEXT", description: "Additional context (e.g. 'Prior to tournament kickoff')" }
    ],
    foreignKeys: [],
    indexes: []
  },
  {
    tableName: "favorites",
    description: "Bookmarks/Favorites tracker enabling offline curation of squads, matches, and stories by the user.",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Favorite ID" },
      { name: "item_type", type: "TEXT", constraints: "NOT NULL", description: "Type of resource ('Player', 'Match', 'Story')" },
      { name: "item_id", type: "INTEGER", constraints: "NOT NULL", description: "ID of target in its respective table" },
      { name: "created_at", type: "TEXT", constraints: "DEFAULT CURRENT_TIMESTAMP", description: "Booking timestamp" }
    ],
    foreignKeys: [],
    indexes: ["idx_fav_lookup"]
  },
  {
    tableName: "settings",
    description: "App configuration properties stored persistently offline (e.g., UI preferences, notifications).",
    columns: [
      { name: "id", type: "INTEGER", constraints: "PRIMARY KEY AUTOINCREMENT", description: "Setting node ID" },
      { name: "key", type: "TEXT", constraints: "NOT NULL UNIQUE", description: "Setting lookup key" },
      { name: "value", type: "TEXT", constraints: "NOT NULL", description: "Stored configuration value" }
    ],
    foreignKeys: [],
    indexes: []
  }
];

export const generateSqlSchema = (): string => {
  let sql = `-- ==========================================================\n`;
  sql += `-- EGYPT WORLD CUP ENCYCLOPEDIA - PRODUCTION SQLITE SCHEMA\n`;
  sql += `-- Fully normalized, with indexes, foreign keys & strict types\n`;
  sql += `-- Generated on 2026-07-04\n`;
  sql += `-- ==========================================================\n\n`;
  sql += `PRAGMA foreign_keys = ON;\n\n`;

  for (const table of DB_TABLES) {
    sql += `-- Table: ${table.tableName}\n`;
    sql += `-- Description: ${table.description}\n`;
    sql += `CREATE TABLE IF NOT EXISTS ${table.tableName} (\n`;
    
    const cols = table.columns.map(col => {
      let line = `  ${col.name} ${col.type}`;
      if (col.constraints) {
        line += ` ${col.constraints}`;
      }
      return line;
    });

    const combined = [...cols, ...table.foreignKeys];
    sql += combined.map(item => `  ${item}`).join(",\n");
    sql += `\n);\n\n`;

    // Indexes
    for (const idx of table.indexes) {
      // Extract indexed column or columns from index name or mock it cleanly
      let colsIndexed = "";
      if (idx.endsWith("_year")) colsIndexed = "edition_year";
      else if (idx.endsWith("_position")) colsIndexed = "position";
      else if (idx.endsWith("_full_name")) colsIndexed = "full_name";
      else if (idx.endsWith("_player")) colsIndexed = "player_id";
      else if (idx.endsWith("_match")) colsIndexed = "match_id";
      else if (idx.endsWith("_edition")) colsIndexed = "edition_id";
      else if (idx.endsWith("_opponent")) colsIndexed = "opponent";
      else if (idx.endsWith("_nationality")) colsIndexed = "nationality";
      else if (idx.includes("fav")) colsIndexed = "item_type, item_id";
      else colsIndexed = "id";

      // If the table is 'editions' and we index year, the column is 'year'
      if (table.tableName === "editions" && idx === "idx_editions_year") {
        colsIndexed = "year";
      }

      sql += `CREATE INDEX IF NOT EXISTS ${idx} ON ${table.tableName} (${colsIndexed});\n`;
    }
    if (table.indexes.length > 0) {
      sql += `\n`;
    }
  }

  return sql;
};
