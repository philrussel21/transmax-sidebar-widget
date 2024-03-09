const icons = ['sunny', 'windy', 'snowy', 'rainy'] as const;

type IconType = typeof icons[number];

const statuses = ['low', 'medium', 'high'] as const;

type Status = typeof statuses[number];

export type {IconType, Status};

export {icons, statuses};
