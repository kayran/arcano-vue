/*
 * import { MUTATE } from '@/store/modules/mutation_types';
 *
 * import WarroomService from '@/services/WarroomService';
 *
 * const { AccountsService } = WarroomService;
 *
 * export function getAccounts({ state, commit }, { userId }) {
 *   if (state.accounts && state.accounts.length) {
 *     commit(MUTATE_MULTIPLE, [{
 *       property: 'requestStatus',
 *       with: 'success',
 *     }, {
 *       property: 'loadingHistory',
 *       with: true,
 *     }, {
 *       property: 'historyIsLoaded',
 *       with: false,
 *     }]);
 *     return Promise.resolve(state.accounts);
 *   }
 *
 *   commit(MUTATE_MULTIPLE, [{
 *     property: 'requestStatus',
 *     with: 'loading',
 *   }, {
 *     property: 'loadingHistory',
 *     with: true,
 *   }, {
 *     property: 'historyIsLoaded',
 *     with: false,
 *   }]);
 *
 *   return AccountsService.find({ headers: { usr_id: userId} })
 *     .then(data => {
 *       const { message } = data;
 *       commit(MUTATE_MULTIPLE, [{
 *         property: 'requestStatus',
 *         with: 'success',
 *       }, {
 *         property: 'accounts',
 *         with: message,
 *       }]);
 *       if (message.length >= 1) {
 *         commit(MUTATE, {
 *           property: 'activeAccount',
 *           with: message[0],
 *         });
 *       }
 *
 *       return Promise.resolve(message);
 *     }).catch((e) => {
 *       console.error(e);
 *       commit(MUTATE, {
 *         property: 'requestStatus',
 *         with: 'error',
 *       });
 *     });
 * }
 *
 * export function setAccount({ commit }, { selectedAccount }) {
 *   commit(MUTATE, {
 *     property: 'activeAccount',
 *     with: selectedAccount,
 *   });
 * }
 *
 */
