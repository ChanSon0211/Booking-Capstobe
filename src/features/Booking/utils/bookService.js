const { default: requester } = require("app/api")
const { apiPath } = require("app/apiPath")

export const getScheduleMovieCinema = async (maHeThongRap) => {
    const res = await requester({
        method:"GET",
        url: apiPath.SCHEDULE_CINEMA + `?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
    })
    return res;
}


