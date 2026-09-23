import AsymmetricImageGrid from '@/ui/AsymmetricImageGrid'
import React from 'react'

const Projects = () => {
  return (
    <div className="w-full page-padding min-h-211
    xl-container no-page-padding-xl xl:min-h-screen">
      <div className="xl:max-w-[1010px]">
        <h2 className="grand-nom text-end">Projects</h2>

        <AsymmetricImageGrid />
      </div>
    </div>
  )
}

export default Projects