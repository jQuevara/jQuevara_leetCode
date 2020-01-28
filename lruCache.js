var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
  const value = this.cache.get(key);
  if (value !== undefined) {
    this.cache.delete(key);
    this.cache.set(key, value);
  }

  return value || -1;
};


LRUCache.prototype.put = function(key, value) {

  if (this.cache.has(key)) {
    this.cache.delete(key);
  }

  if (this.cache.size >= this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};

cache = new LRUCache( 2 /* capacity */ );

assert(cache.get(2) === -1);
cache.put(1, 1);
cache.put(2, 2);
assert(cache.get(1) === 1);
cache.put(3, 3);
console.log(cache);
assert(cache.get(2) === -1);
cache.put(4, 4);
assert(cache.get(1) === -1);

assert(cache.get(3) === 3);
assert(cache.get(4) === 4);

// console.log(cache2);