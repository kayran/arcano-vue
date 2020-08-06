import { MUTATE, MUTATE_MULTIPLE } from '@/store/modules/mutation_types';
import { mutate, mutateMultiple } from '@/store/modules/mutations';

export default {
  [MUTATE]: mutate,
  [MUTATE_MULTIPLE]: mutateMultiple
};
