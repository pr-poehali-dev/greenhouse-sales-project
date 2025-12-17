import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const greenhouses = [
    {
      id: 1,
      name: 'Теплица Урожайная',
      category: 'Усиленная арочная',
      material: 'Поликарбонат',
      specs: {
        dugi: 'Одинарные монолитные из трубы 25×25×0,8мм по ТУ 14-105-568-93',
        pokrytie: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
        rasstoyanie: '100см (Псковитянка 100) / 65см (Псковитянка 65)',
        nagruzka: '200кг (Псковитянка 100) / 320кг (Псковитянка 65)',
        razmer: '3м/2,1м; 2,5м/2,25м',
        dlina: '4 метра',
        udlinenie: 'Добор с шагом 2 метра',
        komplekt: '2 торца с дверьми и форточками, 5 рядов направляющих'
      },
      price: '45 000 ₽',
      rating: 4.9,
      reviews: 127,
      image: 'https://cdn.poehali.dev/projects/68234d7a-57a2-4402-853e-8ff6bfe3c0d1/files/fb25bd6b-e0a7-4d98-9fee-97998f436b3e.jpg'
    },
    {
      id: 2,
      name: 'Теплица Волжанка',
      category: 'Усиленная арочная',
      material: 'Поликарбонат',
      specs: {
        dugi: 'Одинарные монолитные из трубы 40×20×0,7мм по ТУ 14-105-568-93',
        pokrytie: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
        rasstoyanie: '100см (Волжанка 100) / 65см (Волжанка 65)',
        nagruzka: '270кг (Волжанка 100) / 420кг (Волжанка 65)',
        razmer: '3м/2,1м',
        dlina: '4 метра',
        udlinenie: 'Добор с шагом 2 метра',
        komplekt: '2 торца с дверьми и форточками, 5 рядов направляющих'
      },
      price: '52 000 ₽',
      rating: 4.8,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/68234d7a-57a2-4402-853e-8ff6bfe3c0d1/files/6787b918-3e75-4d71-bf48-1ad1daf5c4b0.jpg'
    },
    {
      id: 3,
      name: 'Теплица Стрелка',
      category: 'Каплевидная',
      material: 'Поликарбонат',
      specs: {
        dugi: 'Цельносварные из трубы 25×25×0,8мм по ТУ 14-105-568-93',
        pokrytie: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
        rasstoyanie: '100см (Стрелка 100) / 65см (Стрелка 65)',
        razmer: '3м/2,20м',
        dlina: '4 метра',
        udlinenie: 'Доборы с шагом 2 и 1 метр',
        komplekt: '2 торца, 3 дуги, 4 ряда направляющих, 2 двери, 2 форточки, конёк на крышу'
      },
      price: '48 000 ₽',
      rating: 4.9,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/68234d7a-57a2-4402-853e-8ff6bfe3c0d1/files/30e705a6-7037-4106-ac42-e5b111154561.jpg'
    },
    {
      id: 4,
      name: 'Теплица Домик',
      category: 'Прямостенная',
      material: 'Поликарбонат',
      specs: {
        dugi: 'Одинарные монолитные из трубы 40×20×0,7мм по ТУ 14-105-568-93',
        pokrytie: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
        rasstoyanie: '100см (Домик 100)',
        nagruzka: '550кг (Домик 100)',
        razmer: '3м/2,2м',
        dlina: '4 метра',
        udlinenie: 'Добор с шагом 2 метра',
        komplekt: '2 торца с дверьми и форточками, 6 рядов направляющих'
      },
      price: '58 000 ₽',
      rating: 5.0,
      reviews: 94,
      image: 'https://cdn.poehali.dev/projects/68234d7a-57a2-4402-853e-8ff6bfe3c0d1/files/fb25bd6b-e0a7-4d98-9fee-97998f436b3e.jpg'
    },
    {
      id: 5,
      name: 'Теплица Кремлевская Сказка',
      category: 'Сверхусиленная прямостенная',
      material: 'Поликарбонат',
      specs: {
        dugi: 'Двойные разъемные из трубы 20×20×0,8мм по ТУ 14-105-568-93 с 20 силовыми соединителями',
        pokrytie: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
        rasstoyanie: '100см (Сказка 100) / 65см (Сказка 65)',
        nagruzka: '580кг (Сказка 100) / 870кг (Сказка 65)',
        razmer: '2,7м/2,0м',
        dlina: '4 метра',
        udlinenie: 'Добор с шагом 2 метра',
        komplekt: '2 торца с дверями, 7 рядов перемычек со спайдерным соединением'
      },
      price: '72 000 ₽',
      rating: 5.0,
      reviews: 67,
      image: 'https://cdn.poehali.dev/projects/68234d7a-57a2-4402-853e-8ff6bfe3c0d1/files/6787b918-3e75-4d71-bf48-1ad1daf5c4b0.jpg'
    }
  ];

  const polycarbonate = [
    { name: '4мм Стандарт', price: '2 400 ₽/лист' },
    { name: '6мм Стандарт', price: '3 200 ₽/лист' },
    { name: '6мм цветной Премиум', price: '3 800 ₽/лист' },
    { name: '8мм Стандарт', price: '4 100 ₽/лист' },
    { name: '8мм цветной Премиум', price: '4 900 ₽/лист' }
  ];

  const accessories = [
    { name: 'Торцевые вставки 4мм', price: '150 ₽' },
    { name: 'Торцевые вставки 6мм', price: '180 ₽' },
    { name: 'Торцевые вставки 8мм', price: '220 ₽' },
    { name: 'Соединительный профиль 4мм', price: '250 ₽/м' },
    { name: 'Соединительный профиль 6мм', price: '280 ₽/м' },
    { name: 'Соединительный профиль 8мм', price: '320 ₽/м' },
    { name: 'Термошайбы цветные', price: '8 ₽/шт' },
    { name: 'Термошайбы прозрачные', price: '6 ₽/шт' }
  ];

  const gazebos = [
    {
      name: 'Беседка Пион',
      description: 'Сварной элемент беседки - 3 шт; соединительные перемычки - 6 шт; Доска 25×200×2000 - 12 шт; Поликарбонат - 6 метров',
      price: '35 000 ₽'
    },
    {
      name: 'Беседка Астра',
      description: 'Размер: ширина по основанию 1,73 м, ширина по верху 2,43 м, высота 2,02 м, длина 1,9 м. Каркас: квадратная оцинкованная труба 40×20 мм',
      price: '42 000 ₽'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Елена Смирнова',
      rating: 5,
      date: '15 декабря 2024',
      text: 'Купили теплицу Урожайная - отличное качество! Монтаж простой, инструкция понятная. Поликарбонат держит тепло супер, урожай томатов превзошел все ожидания.',
      product: 'Урожайная'
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      rating: 5,
      date: '8 декабря 2024',
      text: 'Заказал теплицу Кремлевская Сказка - выдерживает любые снеговые нагрузки! Качество материалов на высоте. Ребята помогли с доставкой и консультацией. Рекомендую!',
      product: 'Кремлевская Сказка'
    },
    {
      id: 3,
      name: 'Мария Козлова',
      rating: 5,
      date: '1 декабря 2024',
      text: 'Теплица Стрелка с каплевидной крышей - снег не задерживается совсем! Прочная, красивая, а главное - функциональная. За такую цену - идеальный вариант.',
      product: 'Стрелка'
    },
    {
      id: 4,
      name: 'Александр Волков',
      rating: 5,
      date: '25 ноября 2024',
      text: 'Взяли Волжанку и не пожалели. Усиленный каркас действительно крепкий, выдерживает сильный ветер. Поликарбонат качественный, без желтизны. Доставка вовремя!',
      product: 'Волжанка'
    }
  ];

  const filteredGreenhouses = activeCategory === 'all' 
    ? greenhouses 
    : greenhouses.filter(g => g.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Sprout" className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Поликарбонат & Теплицы
              </h1>
              <p className="text-xs text-gray-600 hidden md:block">г. Саранск</p>
            </div>
          </div>
          <nav className="hidden lg:flex gap-6">
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">Каталог</a>
            <a href="#polycarbonate" className="text-gray-700 hover:text-primary transition-colors font-medium">Поликарбонат</a>
            <a href="#gazebos" className="text-gray-700 hover:text-primary transition-colors font-medium">Беседки</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Icon name="Phone" className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">+7 (937) 672-20-82</span>
            <span className="md:hidden">Позвонить</span>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                🌱 Более 10 лет опыта в Мордовии
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Теплицы для<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  вашего урожая
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Качественные теплицы от производителя с гарантией. Арочные, каплевидные, прямостенные конструкции. 
                Доставка по всей Мордовии.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                  Выбрать теплицу
                  <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 text-lg px-8">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  Консультация
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">5.0</div>
                  <div className="text-sm text-gray-600">Рейтинг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">870кг</div>
                  <div className="text-sm text-gray-600">Макс. нагрузка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/68234d7a-57a2-4402-853e-8ff6bfe3c0d1/files/fb25bd6b-e0a7-4d98-9fee-97998f436b3e.jpg" 
                alt="Теплица" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Каталог теплиц</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Выберите свою теплицу</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Арочные, каплевидные, прямостенные конструкции с разной снеговой нагрузкой
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className="rounded-full"
            >
              Все теплицы
            </Button>
            <Button 
              variant={activeCategory === 'арочная' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('арочная')}
              className="rounded-full"
            >
              Арочные
            </Button>
            <Button 
              variant={activeCategory === 'каплевидная' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('каплевидная')}
              className="rounded-full"
            >
              Каплевидные
            </Button>
            <Button 
              variant={activeCategory === 'прямостенная' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('прямостенная')}
              className="rounded-full"
            >
              Прямостенные
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGreenhouses.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{item.rating}</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-white">{item.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="flex items-center gap-1">
                      <Icon name="MessageCircle" className="w-4 h-4" />
                      {item.reviews} отзывов
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="Box" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Дуги:</strong> {item.specs.dugi}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="Shield" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Покрытие:</strong> {item.specs.pokrytie}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="Weight" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Макс. нагрузка:</strong> {item.specs.nagruzka}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="Ruler" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Размер:</strong> {item.specs.razmer}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Icon name="Package" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Комплект:</strong> {item.specs.komplekt}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-2xl font-bold text-primary">{item.price}</div>
                      <div className="text-xs text-gray-500">базовая комплектация</div>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="polycarbonate" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Материалы</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Поликарбонат и комплектующие</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Качественный поликарбонат различной толщины и все необходимые аксессуары
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Layers" className="w-6 h-6 text-primary" />
                  Поликарбонат
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {polycarbonate.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Wrench" className="w-6 h-6 text-secondary" />
                  Комплектующие
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accessories.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-sm">{item.name}</span>
                      <span className="text-secondary font-bold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gazebos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Беседки</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Садовые беседки</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Уютные беседки с каркасом из оцинкованной трубы и покрытием из поликарбоната
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {gazebos.map((item, i) => (
              <Card key={i} className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-3xl font-bold text-primary">{item.price}</div>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Отзывы клиентов</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Более 10 лет помогаем садоводам Мордовии выращивать богатый урожай
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="hover:shadow-xl transition-shadow duration-300 border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.date}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {review.product}
                    </Badge>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">О компании</Badge>
              <h3 className="text-4xl font-bold mb-6">Поликарбонат & Теплицы в Саранске</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Мы — магазин "Поликарбонат & Теплицы" в Саранске, эксперты в сфере тепличного хозяйства. 
                Более 10 лет мы помогаем садоводам и фермерам Мордовии выращивать здоровые и обильные урожаи.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 hover:shadow-lg transition-shadow text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Warehouse" className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Широкий ассортимент</h4>
                <p className="text-gray-600 text-sm">Арочные, каплевидные, домиком — любые формы и размеры</p>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow text-center p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Качественный поликарбонат</h4>
                <p className="text-gray-600 text-sm">Различная толщина (4мм, 6мм, 8мм) и цветовые решения</p>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow text-center p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Консультация</h4>
                <p className="text-gray-600 text-sm">Поможем подобрать оптимальное решение и расскажем об эксплуатации</p>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Доставка</h4>
                <p className="text-gray-600 text-sm">Оперативная доставка по Мордовии и помощь в установке</p>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Icon name="Truck" className="w-6 h-6 text-primary" />
                      Доставка и оплата
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Доставка по Саранску</h5>
                        <p className="text-gray-700 text-sm">Бесплатная доставка при заказе от 50 000 руб. В остальных случаях стоимость рассчитывается индивидуально</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Доставка по Мордовии</h5>
                        <p className="text-gray-700 text-sm">Осуществляем доставку по всей Республике Мордовия. Стоимость зависит от расстояния и объема груза</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Самовывоз</h5>
                        <p className="text-gray-700 text-sm">Забрать товар можно самостоятельно по адресу: г. Саранск, ул. Рабочая 95а</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Icon name="CreditCard" className="w-6 h-6 text-secondary" />
                      Способы оплаты
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Banknote" className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-semibold">Наличными</h5>
                          <p className="text-gray-700 text-sm">Оплата при получении товара или в нашем офисе</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Building" className="w-5 h-5 text-secondary mt-1" />
                        <div>
                          <h5 className="font-semibold">Банковский перевод</h5>
                          <p className="text-gray-700 text-sm">Безналичная оплата для юридических лиц и ИП</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="CreditCard" className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h5 className="font-semibold">Картой</h5>
                          <p className="text-gray-700 text-sm">Оплата банковской картой в офисе или при доставке</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h3>
              <p className="text-white/90 text-lg">
                Оставьте заявку и получите бесплатную консультацию специалиста
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon name="Phone" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-white/90">+7 (937) 672-20-82</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon name="Mail" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-white/90">Ooo.tri@inbox.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon name="MapPin" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-white/90">г. Саранск, ул. Рабочая 95а</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon name="Clock" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-white/90 text-sm">Пн-Пт: 9:00-17:00<br />Сб: 9:00-14:00<br />Вс: выходной</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="border-2" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" className="border-2" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение (необязательно)" className="border-2 min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    Отправить заявку
                    <Icon name="Send" className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">Поликарбонат & Теплицы</span>
              </div>
              <p className="text-gray-400 text-sm">
                Качественные теплицы и поликарбонат в Саранске с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#catalog" className="hover:text-white transition-colors">Теплицы</a></li>
                <li><a href="#polycarbonate" className="hover:text-white transition-colors">Поликарбонат</a></li>
                <li><a href="#gazebos" className="hover:text-white transition-colors">Беседки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+7 (937) 672-20-82</li>
                <li>Ooo.tri@inbox.ru</li>
                <li>г. Саранск, ул. Рабочая 95а</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Поликарбонат & Теплицы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
