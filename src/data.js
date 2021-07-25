const questions = {
  page: 'Cabeça',
  name: 'customized_radios',
  radiogroups: [
    {
      label: 'Dor de Cabeça',
      key: 'rg1',
      radio: [
        { value: 0, label: 'Nunca ou quase nuca teve esse sintoma.' },
        { value: 1, label: 'Ocasionalmente teve, efeito não foi severo' },
        { value: 2, label: 'Ocasionalmente teve, efeito foi severo' },
        { value: 3, label: 'Frequentemente teve, efeito não foi severo' },
        { value: 4, label: 'Frequentemente teve, efeito foi severo' }
      ]
    },
    {
      label: 'Dor no Pescoço',
      key: 'rg2',
      radio: [
        { value: 0, label: 'Nunca ou quase nuca teve esse sintoma.' },
        { value: 1, label: 'Ocasionalmente teve, efeito não foi severo' },
        { value: 2, label: 'Ocasionalmente teve, efeito foi severo' },
        { value: 3, label: 'Frequentemente teve, efeito não foi severo' },
        { value: 4, label: 'Frequentemente teve, efeito foi severo' }
      ]
    },
    {
      label: 'Olhos',
      key: 'rg3',
      radio: [
        { value: 0, label: 'Lacrimejantes ou coçando.' },
        { value: 1, label: 'Inchados, vermelhos ou com os cílios colando' },
        { value: 2, label: 'Bolsas ou olheiras abaixo dos olhos' },
        {
          value: 3,
          label:
            'Visão borrada ou em túnel (não inclui miopia e astigmatismo sem lente)'
        }
      ]
    }
  ]
}

export { questions }
