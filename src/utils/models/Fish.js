/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import { HEMISPHERES } from '../utils'
/**
 * Representacion de un Pez.
 * @constructor
 */
class Fish {
  constructor ({
    id,
    name,
    price,
    seasons,
    schedule,
    location,
    shadow,
    imageURL
  }) {
    this.id = id
    this.name = name
    this.price = price
    this.seasons = seasons
    this.schedule = schedule
    this.location = location
    this.shadow = shadow
    this.imageURL = imageURL
  }

  //* *****************
  // Getters
  //* *****************

  get getFullDataObjectFish () {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      seasons: this.seasons,
      schedule: this.schedule,
      location: this.location,
      shadow: this.shadow,
      imageURL: this.imageURL
    }
  }

  get getNormalizeSchedule () {
    let result = 'Some error'
    if (this.schedule.length == 0) {
      return 'All day'
    }

    if (this.schedule[0][0] != undefined) {
      const firstFromHour = this.schedule[0][0]
      const firstToHour = this.schedule[0][this.schedule[0].length - 1]
      const secondFromHour = this.schedule[1][0]
      const secondToHour = this.schedule[1][this.schedule[0].length - 1]

      result = `${firstFromHour}:00–${firstToHour}:00 / ${secondFromHour}:00–${secondToHour}:00`
    } else {
      const fromHour = this.schedule[0]
      const toHour = this.schedule[this.schedule.length - 1]
      result = `${fromHour}:00–${toHour}:00`
    }

    return result
  }

  get getSouthSeason () {
    return this.seasons.South
  }

  get getNorthSeason () {
    return this.seasons.North
  }

  //* *****************
  // Public Methods
  //* *****************

  appearsThisMonth (hemisphere) {
    let result = false
    const date = new Date()
    const month = date.getMonth() + 1

    if (hemisphere != HEMISPHERES.South && hemisphere != HEMISPHERES.North) {
      throw new Error(
        `Los valores posibles son "North" y "South" - Valor utilizado ${hemisphere}"`
      )
    }

    this.seasons[hemisphere].forEach((rangeOfSeason) => {
      if (rangeOfSeason.includes('All year')) {
        result = true
      } else if (rangeOfSeason.includes(month)) {
        result = true
      }
    })

    //console.log(`↴ appearsThisMonth() – ${hemisphere} ?`)
    return result
  }

  appearsNow (hemisphere) {
    let result = false
    const date = new Date()
    const hours = date.getHours()

    if (hemisphere != HEMISPHERES.South && hemisphere != HEMISPHERES.North) {
      throw new Error(
        `Los valores posibles son "North" y "South" - Valor utilizado ${hemisphere}"`
      )
    }

    if (this.appearsThisMonth(hemisphere)) {
      if (this.schedule == []) return true

      if (this.schedule.length == []) {
        result = true
        return result
      } else if (this.schedule[0][1] != undefined) {
        this.schedule.forEach((hoursGroup) => {
          if (hoursGroup.includes(hours)) {
            result = true
          }
        })
        return result
      } else {
        if (this.schedule.includes(hours)) {
          result = true
        }
      }
    }

    //console.log(`↴ appearsNow() – ${hemisphere} ?`)
    return result
  }

  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  // Static Methods
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  /**
   * Regresa la coleccion de peces segun el hemisferio asignado.
   * @param {object} data - Recibe la coleccion de peces en formato RAW
   * @param {string} hemisphere - El hemisferio a seleccionar "North" o "South"
   */
  static allFishesAppearsThisMonth (data, hemisphere) {
    if (hemisphere != HEMISPHERES.South && hemisphere != HEMISPHERES.North) {
      throw new Error(
        `Los valores posibles son "North" y "South" - Valor utilizado ${hemisphere}"`
      )
    }

    return data.filter((fish) => {
      const temp_fish = new Fish({ ...fish })
      return temp_fish.appearsThisMonth(hemisphere)
    })
  }

  /**
   * Regresa la coleccion de peces segun el hemisferio asignado.
   * @param {object} data - Recibe la coleccion de peces en formato RAW
   * @param {string} hemisphere - El hemisferio a seleccionar "North" o "South"
   */
  static allFishesAppearsNow (data, hemisphere) {
    if (hemisphere != HEMISPHERES.South && hemisphere != HEMISPHERES.North) {
      throw new Error(
        `Los valores posibles son "North" y "South" - Valor utilizado ${hemisphere}"`
      )
    }

    return data.filter((fish) => {
      const temp_fish = new Fish({ ...fish })
      return temp_fish.appearsNow(hemisphere)
    })
  }

  /**
   * Regresa la lista de peces los cuales dejan de aparecer el siguiente mes.
   * @param {object} data - Recibe la coleccion de peces en formato RAW
   * @param {string} month - El mes a seleccionar tipo de dato month
   */
  static lastChanceToFishing (data, month) {
    return data.filter((fish) => {
      return fish.seasons[0][fish.seasons[0].length - 1] === month
    })
  }

  /**
   * Transforma obj in fishes
   * @param {object} data - Recibe la coleccion de peces en formato RAW
   * @param {string} month - El mes a seleccionar tipo de dato month
   */
  static dataToFishes (data) {
    return data.map((fish) => {
      const tempFish = new Fish({...fish})
      return tempFish;
    })
  }
}

export default Fish