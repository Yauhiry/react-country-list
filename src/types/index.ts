export interface CountryApi {
  flags: CountryApiFlags;
  name: CountryApiName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface CountryApiFlags {
  png: string;
  svg: string;
}

export interface CountryApiName {
  common: string;
  official: string;
  nativeName: {
    [key: string]:
      | {
          official: string;
          common: string;
        }
      | undefined;
  };
}

export interface CountryApiNativeName {
  [key: string]: CountryApiLanguageName | undefined;
}

export interface CountryApiLanguageName {
  official: string;
  common: string;
}

export interface Country {
  flagImage: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export type BadgeLabel = 'area' | 'population';
