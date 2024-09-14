# app/controllers/space_images_controller.rb

class SpaceImagesController < ApplicationController
  before_action :set_space_images, only: %i[index]

  def index
    respond_to do |format|
      format.json
    end
  end

  private
  def set_space_images
    @space_images = SpaceImage.all.order(publication_date: :desc)
  end
end
