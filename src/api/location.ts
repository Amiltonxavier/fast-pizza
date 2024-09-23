import type { geoResponseType, GeoTypes } from "@/types/geo";
import axios from "axios";

export class GeoServices {
  async getLocation({ latitude, longitude }: GeoTypes) {
    try {
      const response = await axios.get<geoResponseType>(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }

    return;
  }
}
