---
date: 08-15-18
edited:

---
# day 13: slide-in on scroll
## overview
* do i understand this? who knows, i'm watching the video the whole way through this time

## things that are passed by value
* numbers, strings, booleans

```js
let foo = 1
let bar = 2
foo = bar // foo = 2, bar = 2
bar = 3 // foo = 2, bar = 3
`````

* behaves as expected

## things that are passed by reference
* arrays
	* you have to call a method like `map`, `copy`, or something idk to make a brand new copy of the array you want to copy
	* spread operator is pretty cool `...`
	* all of these only work for shallow copies

* objects
	* same thing
	* spread operator is still cool `...`
	* `Object.assign(target, source [,additionalProperties])`
	* these still only work for shallow copies

* the cheap way to do any pass-by-value copying with arrays or objects is to convert them into strings lol
	* `Array.prototype.join()` 
	* `JSON.parse(JSON.stringify())`
	* doing either of these will compromise the shape of your data if you choose to output it this way, but this is very useful for deep equality comparisons if you're clever
