<template>
  <div>
    <!-- Inclusion Criteria Tab Card -->
    <q-card class="form-card">
      <q-card-section>
        <div class="text-h5"> Inclusion Criteria </div>
        <div class="text-subtitle1"> These criteria are automatically matched against participants' profiles. </div>
      </q-card-section>

      <!-- Countries -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              Countries:
            </div>
            <div class="text-caption">
              Countries where the participants can be resident in.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-field
              :error="v.inclusionCriteria.countries.$error"
              error-message="At least one country must be specified"
            >
              <q-checkbox
                v-model="v.inclusionCriteria.countries.$model"
                label="Sweden"
                val="se"
                @input="update()"
              />
              <q-checkbox
                v-model="v.inclusionCriteria.countries.$model"
                label="United Kingdom"
                val="gb"
                @input="update()"
              />
              <q-checkbox
                v-model="v.inclusionCriteria.countries.$model"
                label="Spain"
                val="es"
                @input="update()"
              />
            </q-field>
          </div>
        </div>
      </q-card-section>

      <!-- Age Range -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              Age range:
            </div>
            <div class="text-caption">
              Minimum and maximum age range of the participants.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-input
              type="number"
              align="center"
              min="0"
              v-model.number="v.inclusionCriteria.minAge.$model"
              hint="Minimum age."
              @blur="v.inclusionCriteria.minAge.$touch"
              @input="update()"
              :error="v.inclusionCriteria.minAge.$error"
              error-message="A minimum age of 0 is required"
            />
          </div>
          <div class="col q-ml-sm">
            <q-input
              type="number"
              align="center"
              min="0"
              v-model.number="v.inclusionCriteria.maxAge.$model"
              hint="Maximum age."
              @blur="v.inclusionCriteria.maxAge.$touch"
              @input="update()"
              :error="v.inclusionCriteria.maxAge.$error"
              error-message="A minimum age of 0 is required"
            />
          </div>
        </div>
      </q-card-section>

      <!-- Genders -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              Sex:
            </div>
            <div class="text-caption">
              Desired sex of the participant. More than one option can be selected.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-field
              :error="v.inclusionCriteria.sex.$error"
              error-message="At least one sex must be specified"
            >
              <q-checkbox
                v-model="v.inclusionCriteria.sex.$model"
                label="Male"
                val="male"
                @input="update()"
              />
              <q-checkbox
                v-model="v.inclusionCriteria.sex.$model"
                label="Female"
                val="female"
                @input="update()"
              />
              <q-checkbox
                v-model="v.inclusionCriteria.sex.$model"
                label="Other"
                val="other"
                @input="update()"
              />
            </q-field>
          </div>
        </div>
      </q-card-section>

      <!-- Number of Participants -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              Maximum number of participants:
            </div>
            <div class="text-caption">
              Optional. Mobistudy will stop proposing this study when this number of participants has joined this study. Withdrawals are included.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-input
              type="number"
              min="1"
              align="center"
              v-model.trim="value.numberOfParticipants"
              onkeypress="return event.charCode >= 48 && event.charCode <= 57"
              clearable
              @input="update()"
            />
          </div>
        </div>
      </q-card-section>

      <!-- Diseases -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              List of diseases:
            </div>
            <div class="text-caption">
              Type in and select the list of diseases (in English) that the patient will need to have. The disease name is searched on SNOMED.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-select
              ref="diseasesSelect"
              v-model="diseasesVue"
              use-input
              use-chips
              multiple
              :options="diseaseOptions"
              input-debounce="500"
              @filter="searchDisease"
              @input="clearDiseasesFilter"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No diseases found
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
      </q-card-section>

      <!-- Medications -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              List of medications:
            </div>
            <div class="text-caption">
              Type in and select the list of medications the patient has to be taking (only generics). The medication name is searched on SNOMED.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-select
              ref="medsSelect"
              v-model="medsVue"
              use-input
              use-chips
              multiple
              :options="medsOptions"
              input-debounce="500"
              @filter="searchMeds"
              @input="clearMedsFilter"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey"> No medications found </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>
      </q-card-section>

      <!-- BMI Range -->
      <q-card-section>
        <div class="row">
          <div class="col-4 q-pt-lg">
            <div class="text-bold">
              BMI range:
            </div>
            <div class="text-caption">
              Minimum and maximum BMI range of the participants.
              Values must be between 5 and 210.
            </div>
          </div>
          <div class="col q-pl-sm">
            <q-input
              type="number"
              min="5"
              max="210"
              v-model="value.inclusionCriteria.minBMI"
              hint="Minimum BMI."
              @blur="v.inclusionCriteria.minBMI.$touch"
              @input="update()"
              :error="v.inclusionCriteria.minBMI.$error"
              error-message="A BMI between 5 and 210 is required"
            />
          </div>
          <div class="col q-ml-sm">
            <q-input
              type="number"
              min="5"
              max="210"
              align="center"
              v-model="value.inclusionCriteria.maxBMI"
              hint="Maximum BMI."
              @blur="v.inclusionCriteria.maxBMI.$touch"
              :input="update()"
              :error="v.inclusionCriteria.maxBMI.$error"
              error-message="A BMI between 5 and 210 is required"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Custom Criteria Questions -->
    <q-card class="form-card">
      <q-card-section>
        <div class="text-h5"> Custom Criteria Questions </div>
        <div class="text-subtitle1"> Questions for additional custom inclusion criteria. </div>
      </q-card-section>
      <q-card-section>
        <div
          v-for="(criteriaQuestion, index) in value.inclusionCriteria.criteriaQuestions"
          :key="index"
        >
          <div class="row">
            <div class="col-4 q-pt-lg">
              <div class="text-bold">
                Criteria Question:
              </div>
              <div class="text-caption">
                Additional question, especially related to temporary conditions.
                The question must be of Yes/No type.
              </div>
            </div>
            <div class="col q-pl-sm">
              <q-input-multilang
                v-model="criteriaQuestion.title"
                @input="update()"
                :languages="value.generalities.languages"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4 q-pt-lg">
              <div class="text-bold">
                Answer for inclusion:
              </div>
              <div class="text-caption">
                This is the answer that makes the patient eligible.
              </div>
            </div>
            <div class="col q-pl-sm">
              <q-radio
                v-model="criteriaQuestion.answer"
                val="yes"
                label="Yes"
                @input="update()"
              />
              <q-radio
                v-model="criteriaQuestion.answer"
                val="no"
                label="No"
                @input="update()"
              />
            </div>
          </div>
          <div class="row justify-center">
            <div class="col">
              <q-btn
                class="float-left"
                label="Remove Question"
                color="negative"
                icon="remove"
                @click="removeRowCriteriaQuestion(index)"
              />
              <q-btn
                class="float-right"
                v-show="index == value.inclusionCriteria.criteriaQuestions.length-1"
                label="Add Question"
                color="primary"
                icon="add"
                @click="addRowCriteriaQuestion()"
              />
            </div>
          </div>
          <q-separator
            class="q-mt-sm"
            v-show="index != value.inclusionCriteria.criteriaQuestions.length-1"
          />
        </div>
        <div class="row">
          <div class="col">
            <q-btn
              class="float-right"
              v-show="value.inclusionCriteria.criteriaQuestions.length == 0"
              label="Add Question"
              color="primary"
              icon="add"
              @click="addRowCriteriaQuestion()"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import API from '../modules/API'
import QInputMultilang from './QInputMultilang'

export default {
  name: 'StudyDesignCriteria',
  // value here is the inclusion criteria part of the study design
  // v is the vuelidate object
  props: ['value', 'v'],
  components: {
    QInputMultilang
  },
  data () {
    return {
      diseaseOptions: [],
      medsOptions: []
    }
  },
  computed: {
    // these are used to map label and value to term and conceptId
    diseasesVue: {
      get: function () {
        if (this.value.inclusionCriteria.diseases && this.value.inclusionCriteria.diseases.length) {
          return this.value.inclusionCriteria.diseases.map(x => {
            return {
              label: x.term,
              value: x.conceptId,
              vocabulary: x.vocabulary
            }
          })
        } else return []
      },
      set: function (diseasesOpts) {
        this.value.inclusionCriteria.diseases = diseasesOpts.map(x => {
          return {
            term: x.label,
            conceptId: x.value,
            vocabulary: x.vocabulary
          }
        })
      }
    },
    medsVue: {
      get: function () {
        if (this.value.inclusionCriteria.medications && this.value.inclusionCriteria.medications.length) {
          return this.value.inclusionCriteria.medications.map(x => {
            return {
              label: x.term,
              value: x.conceptId,
              vocabulary: x.vocabulary
            }
          })
        } else return []
      },
      set: function (medsOpts) {
        this.value.inclusionCriteria.medications = medsOpts.map(x => {
          return {
            term: x.label,
            conceptId: x.value,
            vocabulary: x.vocabulary
          }
        })
      }
    }
  },
  methods: {
    update () {
      this.$emit('input', this.value)
    },
    async searchDisease (diseaseDescription, update, abort) {
      if (diseaseDescription.length < 2) {
        abort()
        return
      }
      let concepts = await API.searchDiseaseConcept(diseaseDescription, 'en')
      concepts.data = concepts.data.filter((concept) => {
        if (!this.conceptIdExistsInArrayOfObjects(this.value.inclusionCriteria.diseases, concept.conceptId)) {
          return true
        } else return false
      })
      if (concepts.data.length) {
        update(() => {
          this.diseaseOptions = concepts.data.map((c) => {
            return {
              label: c.term,
              value: c.conceptId,
              vocabulary: c.vocabulary
            }
          })
        })
      } else abort()
    },
    async searchMeds (medDescription, update, abort) {
      if (medDescription.length < 2) {
        abort()
        return
      }
      let concepts = await API.searchMedicationConcept(medDescription, 'en')
      concepts.data = concepts.data.filter((concept) => {
        if (!this.conceptIdExistsInArrayOfObjects(this.value.inclusionCriteria.medications, concept.conceptId)) {
          return true
        } else return false
      })
      if (concepts.data.length) {
        update(() => {
          this.medsOptions = concepts.data.map((c) => {
            return {
              label: c.term,
              value: c.conceptId,
              vocabulary: c.vocabulary
            }
          })
        })
      } else abort()
    },
    conceptIdExistsInArrayOfObjects (array, conceptId) {
      let exists = false
      // eslint-disable-next-line no-unused-vars
      for (let [key, value] of array.entries()) {
        if (value.inclusionCriteria.conceptId === conceptId) {
          exists = true
        }
      }
      return exists
    },
    clearDiseasesFilter () {
      if (this.$refs.diseasesSelect !== void 0) {
        this.$refs.diseasesSelect.updateInputValue('')
      }
      this.update()
    },
    clearMedsFilter () {
      if (this.$refs.medsSelect !== void 0) {
        this.$refs.medsSelect.updateInputValue('')
      }
      this.update()
    },
    addRowCriteriaQuestion () {
      this.value.inclusionCriteria.criteriaQuestions.push({
        title: {
          en: '',
          sv: '',
          es: ''
        },
        answer: ''
      })
      this.update()
    },
    removeRowCriteriaQuestion (index) {
      this.value.inclusionCriteria.criteriaQuestions.splice(index, 1)
      this.update()
    }
  }
}
</script>
