function roomMates(rooms, floor) {
  const startIdx = (floor - 1) * 6;
  const endIdx = startIdx + 6;

  return rooms.slice(startIdx, endIdx).filter(name => name !== "");
}

const rooms = ["foo", "bar", "foobar", "barfoo", "foofoo", "barbar"];
console.log(roomMates(rooms, 1));
console.log(roomMates(rooms, 2));
