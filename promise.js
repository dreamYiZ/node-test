import { clg } from "./clg.js";

const func = async () => {
	clg("开始");

	setTimeout(() => {
		clg("第一个定时器执行了");
	}, 2e3);

	clg("继续、1");

	const promiseOne = new Promise((resolve) => {
		clg("许诺里的代码");
		setTimeout(() => {
			clg("第一个许诺定时器执行了");
			resolve("许诺返回成功");
		}, 1e3);
	});

	const promiseResult1 = await new Promise((resolve) => {
		setTimeout(() => {
			clg("第二个许诺定时器执行了");
			resolve("许诺返回成功2");
		}, 1e3);
	});
	clg(`promiseResult1:${promiseResult1}`);
	setTimeout(() => {
		clg("第二个定时器执行了");
	}, 0);
	const promiseResult2 = await new Promise((resolve) => {
		setTimeout(() => {
			clg("第三个许诺定时器执行了");
			resolve("许诺返回成功3");
		}, 1e3);
	});
	clg(`promiseResult2:${promiseResult2}`);
};

func();
