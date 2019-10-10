export interface Perk {
    description: string;
    perk_id: number;
}

export interface CrewSkill {
    icon: string;
    name: string;
    tier: number;
    type_id: number;
    type_name: string;
    perks: Perk[];
}
