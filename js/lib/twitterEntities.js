//twitter-entities.js
//This function converts a tweet with "entity" metadata 
//from plain text to linkified HTML.
//Twitter Entities - https://gist.github.com/442463

//Changes: 2013-01-27 by @nekman
 
//- Modified for AMD usage
//- Minor refactoring
//- Added semi colons

define('twitterEntities', ['jquery'], function() {
    'use strict';

    var escapeHTML = function(text) {
        return $('<div/>').text(text).html();
    },
 
    linkify_entities = function(tweet) {                
        if (!(tweet.entities)) {
            return escapeHTML(tweet.text);
        }

        // This is very naive, should find a better way to parse this
        var index_map = {},

            buildIndexMap = function(entry, callBack) {
            index_map[entry.indices[0]] = [entry.indices[1], callBack];
        };
        
        $.each(tweet.entities.urls, function(i,entry) {
            buildIndexMap(entry , function(text) {
                return "<a href='"+escapeHTML(entry.url)+"'>"+escapeHTML(text)+"</a>";
            });
        });
        
        $.each(tweet.entities.hashtags, function(i,entry) {
            buildIndexMap(entry , function(text) {
                return "<a href='http://twitter.com/search?q="+escape("#"+entry.text)+"'>"+escapeHTML(text)+"</a>";
            });            
        });
        
        $.each(tweet.entities.user_mentions, function(i,entry) {
            buildIndexMap(entry , function(text) {
                return "<a title='"+escapeHTML(entry.name)+"' href='http://twitter.com/"+escapeHTML(entry.screen_name)+"'>"+escapeHTML(text)+"</a>";
            });    
        });
        
        var len,
            result = "",
            last_i = 0,            
            i = 0;
        
        // iterate through the string looking for matches in the index_map
        for (i=0, len = tweet.text.length; i < len; ++i) {
            var ind = index_map[i];

            if (ind) {
                var end = ind[0],
                    func = ind[1];

                if (i > last_i) {
                    result += escapeHTML(tweet.text.substring(last_i, i));
                }
                result += func(tweet.text.substring(i, end));
                i = end - 1;
                last_i = end;
            }
        }
        
        if (i > last_i) {
            result += escapeHTML(tweet.text.substring(last_i, i));
        }
        
        return result;
    };

    return {
        linkify: linkify_entities
    };
});