import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default function useJobs() {
  const state = reactive({
    jobs: [],
    isLoading: true,
    isError:null,
  });

  onMounted(async () => {
    try {
        const response = await axios.get("/api/jobs");
        // console.log("API response:", response.data); 
        state.jobs = response.data;
      } catch (error) {
        console.error("Error fetching jobs:", error);
        state.isError = error;
      } finally {
        state.isLoading = false;
      }
  });

  return state;
}
