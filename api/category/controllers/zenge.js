'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    // GET /hello
    check: async ctx => {
        let entities;
        if (ctx.query._q) {
          entities = await strapi.services.restaurant.search(ctx.query);
        } else {
          entities = await strapi.services.restaurant.find(ctx.query);
        }
    
        return entities.map(entity =>
          sanitizeEntity(entity, { model: strapi.models.restaurant })
        );
    },
  };