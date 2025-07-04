export const schema = [
	{
		key: '0',
		type: 1,
		text: '好评',
		active: false,
		expansion: false,
		value: '',
	},
	{
		key: '1',
		type: 2,
		text: '价格',
		active: false,
		expansion: false,
		value: '',
	},
	{
		key: '2',
		type: 3,
		text: '等级',
		active: false,
		expansion: false,
		value: '',
		subCondition: ['A', 'B', 'C', 'D'].map((t, i) => ({
			key: '2-' + i,
			text: t + '级',
			active: false,
		})),
	},
	{
		key: '3',
		type: 4,
		text: '筛选',
		active: false,
		expansion: false,
		value: '',
		subCondition: [
			{
				key: 'flaw',
				subText: '瑕疵',
				subCondition: [
					'成熟度开',
					'枝条不匀',
					'轻微夹支',
					'1-3枝夹支',
					'枝条带拐',
					'轻微色差',
					'轻微白粉',
					'花头大小不均',
					'轻微黄叶',
				].map((t, i) => ({ key: '3-0-' + i, text: t, active: false })),
			},
			{
				key: 'length',
				subText: '长度',
				subCondition: [
					'55CM',
					'70CM',
					'65CM',
					'60CM',
					'50CM',
					'45CM',
					'35CM',
					'40CM',
					'30CM',
				].map((t, i) => ({ key: '3-1-' + i, text: t, active: false })),
			},
		],
	},
];
