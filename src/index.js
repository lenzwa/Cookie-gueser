const btn = document.querySelector('button')
const text = document.querySelector('.guesstext')
const img = document.querySelector('.cookie')
const cookieText = [
	'"Стремитесь к успеху и выглядите так, словно вы его уже достигли."',
	'"Лучшее всегда является врагом хорошего."',
	'"Ничего не может быть смешнее, чем нравиться всем и каждому."',
	'"Чем мы наполняем наши молитвы, то нам и причитается.',
	'"Разница между победителем и побежденным только в том, что первый поднялся больше раз, чем упал."',
	'"Каждый дарованный нам день является первым в том отрезке жизни, что нам остался."',
	'"Не стоит тратить время и силы на мелочи, нужно думать о главном."',
	'"Все не так гладко, как того бы хотелось, но намного лучше, чем могло бы быть."',
	'"Нужно делать то, что ты должен делать. И пусть все будет так, как будет."',
	'"Определитесь с конечной целью – и у вас появится шанс на победу."',
	'"Обратной стороной каждого поражения являются открывающиеся новые возможности."',
	'"Стать твоим другом дано не каждому, но каждому дано стать чьим-то учителем."',
	'"Чтобы быть поистине счастливым – властвуй над своими помыслами."',
	'"Каждому из нас дается столько блага, сколько он сам дал другим."',
	'"Стоя на месте, двигаться можно только назад."',
	'"Если Господь закрывает перед нами дверь, значит, он растворил окно."',
	'"Лучше сделать и пожалеть о сделанном, чем не сделать и сожалеть о не сделанном."',
	'"Что бы ни случилось, все в конечном итоге приведет к лучшему."',
	'"Пусть тебя не страшит неумение. Делая с желанием – научишься."',
]
btn.addEventListener('click', function () {
	let randomText = Math.floor(Math.random() * cookieText.length)
	text.textContent = cookieText[randomText]
	img.setAttribute('src', '/src/image/broken.png')
})
