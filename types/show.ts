export type ShowData = {
  id: number,
  url: string,
  name: string,
  genres: string[],
  premiered: string,
  rating: {
    average: number,
  },
  image?: {
    medium?: string,
    original?: string,
  },
  summary: string,
  network?: {
    country: {
      name: string,
      code: string,
    }
  }
}

export type Persona = {
  id: number,
  url: string,
  name: string,
  image: {
    medium?: string,
  }
}

export type CastMember = {
  person: Persona,
  character: Persona,
  self: boolean,
  voice: boolean,
}

export type Show = {
  score: number,
  show: ShowData
};