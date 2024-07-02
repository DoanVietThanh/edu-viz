import { HubDetail } from '@/actions/chat/get-hub'
import { useAuth } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { SERVER_URL } from '@/constants/env-config'

function useHubs() {
  const { getToken } = useAuth()

  return useQuery({
    queryKey: ['hubs'],
    queryFn: async () =>
      axios
        .get<HubDetail[]>(`${SERVER_URL}/api/chat/hubs`, {
          headers: {
            Authorization: `Bearer ${await getToken()}`
          }
        })
        .then((res) => res.data)
  })
}

export default useHubs
