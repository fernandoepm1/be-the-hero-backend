const connection = require('../db/connection');

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidentsByOng = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidentsByOng);
  }
};