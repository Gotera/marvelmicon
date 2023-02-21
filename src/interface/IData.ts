export interface IData {
	data: Character[]
}

export type Character = {
  id: number;
  name: string;
	description: string;
	urls: [
		{
			type: string;
			url: string;
		}
	],
	thumbnail: {
		path: string;
		extension: string;
	}
}