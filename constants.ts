
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Detergente Multiuso Concentrado 5L',
    category: Category.Cocina,
    price: 1250,
    oldPrice: 1500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVEP3TaIjKN3CJwzHF50rIl7fGHbCVvtroKYAp0Q7MlbOY6gMZbkXGeihxwhsBJ1ULr8Nev8VfTz3ii6ae8S3QMpCLvgc5df9V7zb3AukgJzyVliEq-DbCRepKQ_Vcp6tHH_fCeweVn0ikrzW15V8NPeV1C5esaYy6SL7-qwxz--Iz46h6aKPRmsMMZY2r89jxjFblQfXvUXFMsP69-_H_jSR4Kge4bId0ZCiaHkuwz3SqqW4Z5moLuEgMQ9Omaksokp3sqWxVl-_H',
    description: 'Nuestra fórmula profesional elimina el 99.9% de bacterias. Ideal para superficies de cocina.',
    rating: 4.8,
    reviews: 128,
    sku: 'ZC-CO-001',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Limpiador de Porcelanato Brillo Espejo',
    category: Category.Pisos,
    price: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIY8aYUwQJ6DpnDrLbCe33TX9H2QZzEeaQOMgN395c14GUvZSDcBXI1uVomcSRpkrsOAvIFS3HrBjZ-NZtgdg7guPGuBqwC1KnjVTUGNTUBuCRbAeQcMY2MiqwHV2SJunCfMD6zJ4tsvCkQqHw8dW3fal0aupRKTYY2khSBlKHlFAekrvuCM84j7sNZGdeltRMGF85a6xMIOKMLinJBR8sS4j-63x3X2tdIQu5k1Kh6P4NClsy75zholrr48_eWXopaSg0T8ZM9-Fw',
    description: 'Restaura el brillo natural de tus pisos con una sola pasada. No deja residuos grasos.',
    rating: 4.7,
    reviews: 95,
    sku: 'ZC-PI-002'
  },
  {
    id: '3',
    name: 'Desinfectante Anti-Sarro Máximo Poder',
    category: Category.Baño,
    price: 1100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDC6bMA64I9_MvEKj3cshA4p1QB05z_oxtzQQ3BFjLteWRqG7I7gu1FthOYZj3G0n9ei01H6LNgzgVnJvuD4EsDuSabaLD-6w99CAGmYDGD46yORpuZHqhjfwEChPeWNOoYUKLYr0-ZwOzDhPoEMNMooK3nEzjMq076V7U8JUGpkVPuq6adn2Wx2_R1BGsS2VM4NmknlJVInm-0SPENMG6jUvUNtt8qLubfGRkJtgGZAmlZiJcJfZL9KDR7szTpk2oArkNxtlCaPGg',
    description: 'Elimina el sarro más difícil y desinfecta profundamente. Aroma fresco.',
    rating: 4.9,
    reviews: 156,
    sku: 'ZC-BA-003',
    isNew: true
  },
  {
    id: '4',
    name: 'Jabón Líquido para Ropa Blanca 3L',
    category: Category.Lavandería,
    price: 1450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBENk5WwN1HDiu26_GDPCT3i8VUHoBmttzxVYNaGpq93c8cu0EHRbbNf9hT-BnUByyfz-Q-UhQpgqm9Fi8IAF27iK0H8MKrbegoctMeNg0ggv_GIhiqDARYzQEh9NKAc08e52WD1PDhBvTgU99GKXJ-IBvb1J1xP6THBSN6iKJ5LYaf5qigf4zk91z_EfSkCDbD6ROCi5zqlS5IOQeDrAM8dTMxrbzPSXRBq2aVVgq-gJoFGTq9eEG9q48rDyGG63MHjGrGmiZZ_ndV',
    description: 'Blanqueador óptico de alta eficiencia. Cuida las fibras de tu ropa.',
    rating: 5.0,
    reviews: 210,
    sku: 'ZC-LA-004'
  },
  {
    id: '5',
    name: 'Pack x6 Esponjas Doble Cara',
    category: Category.Accesorios,
    price: 420,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD76YocA6WWH2ceOrvjb9VN05vwC-K8tUngJ9_1KqGcLKRQXPo5ibPZ5fw7kJo2DH0qKv8zDznmoy3_ZcEwmUg6RJp2qI87DpkODyt2YOiITVgEyfzk49K8xrgYtDL5HJeWlD517cjt8mSFx4av7r2aHws345FCqFNTc7aU-punxLdyGh-IpurUiZTBAZEXdiI1tfqZ_rZxX3Ervpac6KfAUWJzW-WiL0yZQHiBFTgDSXH4X66p5sdKBIvmrVaYrfX9DZgjw0Uu4sFO',
    description: 'Durabilidad superior para el lavado diario de vajilla.',
    rating: 4.5,
    reviews: 340,
    sku: 'ZC-AC-005'
  },
  {
    id: '6',
    name: 'Limpia Vidrios Profesional Anti-Manchas',
    category: Category.Cocina,
    price: 680,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOAQBYLD02n4KNUtKrGrKa-fR2qFpHt2CBeMkCk4xXsxpXT-gGo9wdDW6WHR-fZY62S61qd6PIWcN7htxPZk8pwQO4RiFbPkwT1_T1jO2rZU-oBV8V2ZMQaW6VKiQmD8jz1BYIMew_1sb6rmgReb4QFWXZRaBr4MQQi_P0yeTMVX97OG5qeNpp3AhMCIcPjbAmex0Rfc59cN-pcg6PpU15dj3WwY8efV2y-WSTUcPCdG1NK99Sz2l0JNjOf_IAqItGaThnMvWnQ3KO',
    description: 'Secado instantáneo sin dejar marcas. Especial para espejos y ventanas.',
    rating: 4.8,
    reviews: 82,
    sku: 'ZC-CO-006'
  },
  {
    id: '7',
    name: 'Limpiador de Pisos 20L Industrial',
    category: Category.Industrial,
    price: 95000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdS-Z36voNnRUl5VOur36dKrmQi85nzxnP6vNI0DZVaqll5m_pdQSpZITHOB-OCnmdccjxS21R809SlYs549QWf8DWVd3ONoqoWxqQYNDujokUtN6Oxnz97R2ot51dh4p6hRuZZs-shGpf5sTSeXvyceJxElFK_BTPgjCKLvdnyfY6lX2KsXAmvCqcqjVXe_mqkg_tfla_pum92c45vTGieUUrlBRwW_Tw_Ca07TsVBaFk_cd1mZREXcOXJyLumCunzbZc5d89D2Ar',
    description: 'Alto rendimiento para grandes superficies industriales.',
    rating: 4.9,
    reviews: 45,
    sku: 'ZC-IN-007'
  }
];

export const CATEGORIES = [
  { name: Category.Cocina, icon: 'restaurant', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXX-kwh-2Vnp20eRjqsKUJ-sRhF7p-NUx5GvTh8HCmmq8u6tEMJVmHsA0qH0kqZzzt_N0of_ZxfEbsSOLjpvvUm-t7jChmx5EPtC8juNbEw3SSrthuBF-QFq35HSRDaUiVFF8kgP4FpIZG_LJeYMo2oUL7wZ3Z0d3IX367Gj3OS3I82PQYaRmN6UVJG8Qw2DqlUb-VxbRL9duocunrdOXqQ0UHb9mUs0zo47aCDJmfMULxgh78rC8J3bOz5TYafNFx81d9QdludQtC' },
  { name: Category.Baño, icon: 'bathtub', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdzt7fNbNmviNJyy0WJUhxx0CYXhykT2Sk3nwvMMS8Ur0-FIYnRl64VTn7nyyvB-8buhhhVEfhz6jy3tWWTV9Q2uWOHZyZCtsqP2W_NY82fBd53FNVY8I2PHqGMv6ysZ5-xfb9FqVnF9SjAtI5nSrTDVqBwjDU-G4K45ihEwXYWiTjIOihBoJZhEzjt5JlSarfpFQZuqjDJnlh70-5A_2VtwKHTZtqL1n02UbEyvmLTk2vcusR6t_V_Oiv6BmmdlO1oLIleGAtbNTx' },
  { name: Category.Pisos, icon: 'layers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALEIhvWinf1iFSZVb69HJs3b2JlZXZGm6gLrAE-gvCmuV1O5_8FH_Z9jparASCOnFzBTTDEUiAOEgajl_RQe8JuVCSOxIxfbTuGjdBdYktiGX9jDsXmp2pWP9cAag6hBpKtMFZOJkhK9-uG1SurPsXeY1_jqZDncl86JvxDmdeGiS-cCUhR0lKLbt_p1rg7m59BWnf3vjDlkiAqAnKs_dlCcnFduHWssGjnMc-oOOrzeA1WvzZGuslXtWysPLIGlWEofdlyv4ljwOh' },
  { name: Category.Lavandería, icon: 'local_laundry_service', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZV1594rbN9NL36ASklfYljbo4FbgbCz4nTMLi03FzKp38_rxmj4ZlJ7FU9PGmRcT5iTEUGeHll7gWvWD-Tt63tBq1T_f-1KEXkEZrTQLEZW1FyNloFW4NBVPJBA1ObJFNHavp1ewdIr55BAoz-hBkXU-sqNyWwvYgV1wnNwHEp5filmq5BTuD2r3JimRFE5NhAnEXkJjR6c_xZ6JNSiU3WYU-Lbm2YczRKTTr-3f-toGz7QE_dkLod8p6ixx7Rd_XvGV2aDHAiFV' }
];
