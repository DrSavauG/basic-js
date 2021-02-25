module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .map((e) => (typeof e === "string" ? e.trim()[0].toUpperCase() : ""))
        .sort()
        .join("")
    : false;
};
