import { BenefitsEnum } from './enums/benefits.enum';

export interface ITierAndDetails {
  tier: string;
  benefits: BenefitsEnum;
  active: boolean;
  id: string;
}
