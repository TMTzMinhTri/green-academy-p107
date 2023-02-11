import { RootState } from 'src/@core/redux/store'

export const selectActicleLoading = (state: RootState) => state.acticle.acticles.isLoading
export const selectListActicle = (state: RootState) => state.acticle.acticles.data
