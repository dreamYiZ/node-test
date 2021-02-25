const getTime = function () {
	let d = new Date();
	return `${d.getHours()}时${d.getMinutes()}分${d.getSeconds()}秒${d.getMilliseconds()}毫秒`
}
export {getTime}