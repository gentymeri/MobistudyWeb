<template>
  <q-card>
    <q-card-section>
      <div class="text-h5"> Participants </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-around">
        <div >
          <div class="text-h5">
            Joined
          </div>
          <div class="text-h4">
            {{ participants.joined }}
          </div>
        </div>
        <div >
          <div class="text-h5">
            Active
          </div>
          <div class="text-h4">
            {{ participants.active }}
          </div>
        </div>
        <div >
          <div class="text-h5">
            Completed
          </div>
          <div class="text-h4">
            {{ participants.completed }}
          </div>
        </div>
        <div >
          <div class="text-h5">
            Withdrawn
          </div>
          <div class="text-h4">
            {{ participants.withdrawn }}
          </div>
        </div>
      </div>

      <div class="row q-ma-lg justify-around">
        <q-btn label="Download study data" @click="downloadData()" :loading="creatingDownload"></q-btn>
      </div>

      <table-audit-log :studyKey="studyDesign._key"/>
    </q-card-section>
  </q-card>
</template>

<script>
import API from '../modules/API'
import TableAuditLog from '../components/TableAuditLog'

export default {
  name: 'StudyStats',
  props: ['studyDesign'],
  components: {
    TableAuditLog
  },
  data () {
    return {
      participants: {
        joined: 0,
        active: 0,
        completed: 0,
        withdrawn: 0
      },
      creatingDownload: false
    }
  },
  created () {
    // set the study key to -1 to avoid loading data in the audit log table
    if (!this.studyDesign._key) this.studyDesign._key = -1
  },
  watch: {
    async studyDesign () {
      if (this.studyDesign._key) {
        try {
          let stats = await API.getParticipantsStatusStats(this.studyDesign._key)
          for (let stat of stats) {
            if (stat.status === 'accepted') {
              this.participants.joined += stat.count
              this.participants.active = stat.count
            }
            if (stat.status === 'completed') {
              this.participants.joined += stat.count
              this.participants.completed = stat.count
            }
            if (stat.status === 'withdrawn') {
              this.participants.joined += stat.count
              this.participants.withdrawn = stat.count
            }
          }
        } catch (err) {
          this.$q.notify({
            color: 'negative',
            position: 'bottom',
            message: 'Cannot retrieve the study statistics. ' + err.message,
            icon: 'report_problem'
          })
        }
      }
    }
  },
  methods: {
    async downloadData () {
      this.creatingDownload = true
      try {
        let filename = await API.downloadStudyData(this.studyDesign._key)
        window.open('datadownload/' + filename)
      } catch (error) {
        this.$q.notify({
          color: 'negative',
          position: 'bottom',
          message: 'Cannot retrieve the study data. ' + error.message,
          icon: 'report_problem'
        })
      }
      this.creatingDownload = false
    }
  }
}
</script>
