/*
  Regular Expression

  Syntax
  /pattern/modifier(s);//pattern=motif
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive//case-insensitive=insensible à la casse
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.//Found = trouvé
*/

let mystring ="Hello Montassar I Find My Phone montassar";

// let RegExp = /Montassar/;

let RegExp = /Montassar/ig;

console.log(mystring.match(RegExp));