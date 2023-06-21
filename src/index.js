import './index.html'
import './style/normalize.css'
import './styles.css'
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
	exchangeResult = document.querySelector(
		'.main__exchange-window-inputwrapper-result'
	)

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
	if (
		select.value === 'FROM' ||
		select2.value == 'TO' ||
		(select.value == 'FROM' && select2.value == 'TO')
	) {
		throw new Error('No')
	} else {
		fetch(
			`https://v6.exchangerate-api.com/v6/e3db0a0162b212042571d1aa/pair/${select.value}/${select2.value}/${a}`
		)
			.then(res => {
				let data
				console.log('Pending Data')
				return (data = res.json())
			})
			.then(data => {
				let result
				console.log('Receiving Data')
				return (result = data.conversion_result)
			})
			.then(result => {
				exchangeResult.textContent = result
			})
	}
})
const navbarLinkExchange = document.querySelector(
		'.header__nav-list-item-link-exchange'
	),
	navbarLinkContact = document.querySelector(
		'.header__nav-list-item-link-contact'
	)
document
	.querySelector('.header__nav-list-item-link')
	.addEventListener('click', e => {
		e.preventDefault()
	})
navbarLinkContact.addEventListener('click', e => {
	e.preventDefault()
	document.querySelector('.contact__name_email-name').scrollIntoView({
		behavior: 'smooth',
	})
})
navbarLinkExchange.addEventListener('click', e => {
	e.preventDefault()
	fIn.scrollIntoView({
		behavior: 'smooth',
	})
})
const slidingBut = document.querySelector('.header__nav-logo')
const extbtn = document.querySelector('.header__nav-list-closingItem')
const slidingEl = document.querySelector('.header__nav-list')
if (screen.width <= 620) {
	slidingBut.addEventListener('click', () => {
		slidingEl.style.animation = 'slidinToBot 1.5s alternate ease forwards'
		slidingEl.style.display = 'flex'
		document.body.style.overflow = 'hidden'
		if (
			navbarLinkExchange.addEventListener('click', () => {
				document.body.style.overflow = 'visible'
				slidingEl.style.display = 'none'
			}) ||
			navbarLinkContact.addEventListener('click', () => {
				document.body.style.overflow = 'visible'
				slidingEl.style.display = 'none'
			})
		) {
		}
	})
	extbtn.addEventListener('click', () => {
		slidingEl.style.animation = 'slidinToTop 1.5s reverse ease forwards'
		document.body.style.overflow = 'visible'
	})
}
