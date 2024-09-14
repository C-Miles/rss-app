class SpaceImage < ApplicationRecord
  validates :description, presence: true
  validates :guid, presence: true, uniqueness: true
  validates :image_url, presence: true
  validates :link, presence: true
  validates :publication_date, presence: true
  validates :title, presence: true
end
