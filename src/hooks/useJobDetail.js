import { reactive, onMounted } from "vue";
import axios from "axios";

export default function useJobDetail(jobId) {
  const state = reactive({
    job: {},
    isLoading: true,
    isError: null,
  });

  onMounted(async () => {
    try {
      const response = await axios.get(`/api/jobs/${jobId}`);
      state.job = response.data;
    } catch (error) {
      console.error("Error fetching job:", error);
      state.isError = error;
    } finally {
      state.isLoading = false;
    }
  });

  return state;
}