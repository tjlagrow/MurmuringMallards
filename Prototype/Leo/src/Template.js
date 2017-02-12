let idList = [0, -1, -1, -1, -1, -1];

export const TYPES = {
  FIELD: 'field' 
};

export function getID(pos) {
	return idList[pos];
}
