import { encode } from './util'
import SpotifyUri from './spotify-uri'

export default class Local extends SpotifyUri {
  public type = 'local'
  public artist: string
  public album: string
  public track: string
  public seconds: number

  constructor (
    uri: string,
    artist: string,
    album: string,
    track: string,
    seconds: number
  ) {
    super(uri)
    this.artist = artist
    this.album = album
    this.track = track
    this.seconds = seconds
  }

  public static is (v: any): v is Local {
    return Boolean(typeof v === 'object' && v.type === 'local')
  }

  public toURI (): string {
    return `spotify:local:${encode(this.artist)}:${encode(this.album)}:${encode(this.track)}:${this.seconds}`
  }

  public toURL (): string {
    return `/local/${encode(this.artist)}/${encode(this.album)}/${encode(this.track)}/${this.seconds}`
  }
}
