class SpaceImagesController < ApplicationController
  before_action :set_space_images, only: %i[index]

  def index
    respond_to do |format|
      format.json
    end
  end

  private
  def set_space_images
    @space_images = if params[:search].present?
      SpaceImage.search_by_title_and_description(params[:search])
                .order(publication_date: :desc)
    else
      SpaceImage.all.order(publication_date: :desc)
    end
  end
end
