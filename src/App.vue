<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>O Arcano</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container

        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-text-field
              v-model="name"
              label="Nome"
              filled
              outlined
              clearable
              counter
              dense
              @change="saveName"
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card>
              <v-card-title>
                Resumo do personagem:
                <span v-if="name">
                  {{ name }}
                </span>
              </v-card-title>
              <v-card-text class="v-card-text--positioning">
                <AttributeItem
                  description="Partir pra porrada. Proteger alguém"
                  title="Braveza"
                  :value="bravery"
                />
                <AttributeItem
                  description="Investigar um mistério. Perceber uma enrascada"
                  title="Esperteza"
                  :value="smartness"
                />
                <AttributeItem
                  description="Usar magia"
                  title="Estranheza"
                  :value="strangeness"
                />
                <AttributeItem
                  description="Agir sob pressão. Dar uma mão"
                  title="Firmeza"
                  :value="firmness"
                />
                <AttributeItem
                  description="Manipular alguém"
                  title="Sutileza"
                  :value="finesse"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <SliderOption
              title="Sorte"
              append-text="Condenado"
              prepend-text="Salvo"
              @change="saveLucky"
            >
              Marque a caixa de Sorte para alterar uma rolagem para 12 ou para evitar todo o dano de
              um ferimento.
            </SliderOption>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <SliderOption
              title="Dano"
              append-text="Morrendo"
              prepend-text="Ileso"
              @change="saveDamage"
            >
              Quando você chegar em 4 ou mais, você se tornará 'Instável' (Lesões instáveis pioram
              com o tempo)
            </SliderOption>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-tabs
              v-model="tab"
              right
            >
              <v-tabs-slider />

              <v-tab>
                Aparencia
              </v-tab>
              <v-tab-item>
                <v-card
                  flat
                  tile
                  class="v-card--spacing"
                >
                  <v-card-subtitle>Defina a aparência do seu personagem</v-card-subtitle>
                  <v-select
                    label="Gênero"
                    outlined
                    dense
                    :items="genders"
                    @change="saveGender"
                  />
                  <v-select
                    label="Olhos"
                    outlined
                    dense
                    :items="eyes"
                    @change="saveEye"
                  />
                  <v-select
                    label="Roupas"
                    outlined
                    dense
                    :items="clothes"
                    @change="saveClothes"
                  />
                </v-card>
              </v-tab-item>

              <v-tab>
                Classificação
              </v-tab>
              <v-tab-item>
                <v-card
                  flat
                  tile
                  class="v-card--spacing"
                >
                  <v-card-subtitle>Escolha uma opção de classificação</v-card-subtitle>
                  <v-radio-group
                    @change="saveClassification"
                  >
                    <v-radio
                      label="Braveza ±0, Esperteza +1, Estranheza +2, Firmeza +1, Sutileza −1"
                      :value="{ bravery: '±0', smartness: '+1', strangeness: '+2', firmness: '+1', finesse: '−1' }"
                    />
                    <v-radio
                      label="Braveza +1, Esperteza +1, Estranheza +2, Firmeza -1, Sutileza ±0"
                      :value="{ bravery: '+1', smartness: '+1', strangeness: '+2', firmness: '-1', finesse: '±0' }"
                    />
                    <v-radio
                      label="Braveza -1, Esperteza +2, Estranheza +2, Firmeza ±0, Sutileza −1"
                      :value="{ bravery: '-1', smartness: '+2', strangeness: '+2', firmness: '±0', finesse: '−1' }"
                    />
                    <v-radio
                      label="Braveza -1, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza +1"
                      :value="{ bravery: '-1', smartness: '+1', strangeness: '+2', firmness: '±0', finesse: '+1' }"
                    />
                    <v-radio
                      label="Braveza ±0, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza ±0"
                      :value="{ bravery: '±0', smartness: '+1', strangeness: '+2', firmness: '±0', finesse: '±0' }"
                    />
                  </v-radio-group>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import SliderOption from '@/components/SliderOption';
import AttributeItem from '@/components/AttributeItem';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    AttributeItem,
    SliderOption,
  },
  data: () => ({
    tab: null,
    genders: [
      'Homem', 'Mulher', 'Andrógino'
    ],
    eyes: [
      'Sombrios', 'Ferozes', 'Cansados', 'Faiscantes'
    ],
    clothes: [
      'Amarrotadas', 'Estilosas', 'Góticas', 'Antiquadas'
    ],
  }),
  computed: {
    ...mapState('general', ['lucky', 'damage', 'name', 'classification', 'clothes', 'eye', 'gender']),
    bravery: {
      get() {
        return Number(this.classification.bravery) || 0;
      }
    },
    smartness: {
      get() {
        return Number(this.classification.smartness) || 0;
      }
    },
    strangeness: {
      get() {
        return Number(this.classification.strangeness) || 0;
      }
    },
    firmness: {
      get() {
        return Number(this.classification.firmness) || 0;
      }
    },
    finesse: {
      get() {
        return Number(this.classification.finesse) || 0;
      }
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    ...mapMutations('general', {
      mutate: 'MUTATE',
    }),
    saveGenericProp(property, with_value) {
      this.mutate({
        property,
        with: with_value,
      });
    },
    saveLucky(lucky) {
      this.saveGenericProp('lucky', lucky);
    },
    saveDamage(damage) {
      this.saveGenericProp('damage', damage);
    },
    saveName(name) {
      this.saveGenericProp('name', name);
    },
    saveGender(gender) {
      this.saveGenericProp('gender', gender);
    },
    saveEye(eye) {
      this.saveGenericProp('eye', eye);
    },
    saveClothes(clothes) {
      this.saveGenericProp('clothes', clothes);
    },
    saveClassification(classification) {
      this.saveGenericProp('classification', classification);
    }
  },
};
</script>

<style>
  .v-main{
    background-image: url(/img/background.jpg);
    background-size: cover;
  }

  .v-card--spacing{
    padding: 20px;
  }

  .v-card-text--positioning{
    display: flex;
    flex-wrap: wrap!important;
    flex-flow: row;
    align-items: flex-end;
    justify-content: space-between;
  }

</style>
