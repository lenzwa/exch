export function exchangeCalculation() {
	const select = document.querySelector(
		'.main__exchange-window-selectWrapper-selectItem1'
	)
	const select2 = document.querySelector(
		'.main__exchange-window-selectWrapper-selectItem2'
	)
	const fIn = document.querySelector(
			'.main__exchange-window-inputwrapper-amount'
		),
		btn = document.querySelector('.main__exchange-window-button'),
		sIn = document.querySelector('.main__exchange-window-inputwrapper-result')

	async function currency() {
		await fetch(
			'https://v6.exchangerate-api.com/v6/e3db0a0162b212042571d1aa/codes'
		)
			.then(res => {
				let data
				return (data = res.json())
			})
			.then(data => {
				let rate
				return (rate = data.supported_codes)
			})
			.then(rate => {
				for (let item of rate) {
					var opt = document.createElement('option')
					opt.value = item[0]
					opt.innerHTML = item[1]
					select.append(opt)
				}
				for (let item of rate) {
					var opt = document.createElement('option')
					opt.value = item[0]
					opt.innerHTML = item[1]
					select2.append(opt)
				}
			})
	}
	currency()
	btn.addEventListener('click', () => {
		let a = fIn.value
		fetch(
			`https://v6.exchangerate-api.com/v6/e3db0a0162b212042571d1aa/pair/${slc.value}/${slc2.value}/${a}`
		)
			.then(res => {
				return (data = res.json())
			})
			.then(data => {
				return (result = data.conversion_result)
			})
			.then(result => {
				sIn.textContent = result
			})
	})
}
