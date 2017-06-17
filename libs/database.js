/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var client = null;

function setRedisClient(c) {
    client=c;
}

function c(){
    return client
}

// Functions which will be available to external callers
module.exports.c = c;
module.exports.set = setRedisClient;
