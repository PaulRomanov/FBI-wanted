export interface User {
  email: string
  password: string
  role?: string
}

export interface Response {
  users: User[]
}

export interface ResponseApi {
  id: string
  additional_information: null
  age_max: null
  age_min: null
  age_range: null
  aliases: []
  build: null
  caution: string
  complexion: null
  coordinates: []
  dates_of_birth_used: []
  description: string
  details: null
  eyes: string
  eyes_raw: string
  field_offices: []
  files: []
  hair: string
  hair_raw: string
  height_max: number
  height_min: number
  images: []
  languages: null
  legat_names: null
  locations: null
  modified: string
  nationality: string
  ncic: null
  occupations: null
  path: string
  person_classification: string
  place_of_birth: string
  possible_countries: null
  possible_states: null
  publication: string
  race: string
  race_raw: string
  remarks: string
  reward_max: number
  reward_min: number
  reward_text: string
  scars_and_marks: null
  sex: string
  status: string
  subjects: []
  suspects: null
  title: string
  uid: string
  url: string
  warning_message: null
  weight: string
  weight_max: number
  weight_min: number
}
