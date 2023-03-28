export interface EnvVar {
  key: string;
  value: string;
}

export interface Env {
  name: string;
  envVars: EnvVar[]
}
