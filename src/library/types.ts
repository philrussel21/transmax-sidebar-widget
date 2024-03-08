const icons = ['sunny', 'windy', 'snowy', 'rainy'] as const;

type IconType = typeof icons[number];

export type {IconType};

export {icons};
