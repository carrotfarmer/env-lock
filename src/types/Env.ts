import { EnvVar } from "./EnvVar"

export interface Env {
  name: string
  envVars: EnvVar[]
}
