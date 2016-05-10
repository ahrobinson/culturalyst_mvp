'use strict';

angular.module('mvpApp')
  .service('MediaList', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    const mediaList = [
      {'name': 'Music', 'genre': ['Brass', 'Classical', 'Country', 'Experimental', 'Folk', 'Hip-hop', 'Jazz', 'Rock']},
      {'name': 'Writing', 'genre': ['Fiction', 'Non-Fiction', 'Poetry']},
      {'name': 'Photography & Videography', 'genre': ['Documentaries', 'Feature Films', 'Short Films']},
      {'name': 'Visual', 'genre': ['Acrylics', 'Pastels', 'Watercolor', 'Charcoal', 'Pencil']},
      {'name': 'Photography', 'genre': ['Digital', 'Film']},
      {'name': 'Dance', 'genre': ['Ballet', 'Ballroom', 'Hip-hop', 'Lyrical','Theater', 'Plays', 'Musicals']},
      {'name': 'Bearers', 'genre': ['Mardi Gras Indians']},
      {'name': 'Comedy', 'genre': ['Dark', 'Upbeat']},
      {'name': 'Crafts', 'genre': ['Crochet', 'Cross Stitch', 'Knitting', 'Lettering Arts']},
      {'name': 'Design'},
      {'name': 'Code', 'genre': ['Front-end', 'Back-end', 'Full-stack']},
      {'name': 'Sculpture', 'genre': ['Clay', 'Metal', 'Wood']},
    ]

     return {
      getMediaList: function () {
        return mediaList;
      }
    };

  });
