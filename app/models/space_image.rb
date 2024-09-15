class SpaceImage < ApplicationRecord
  include PgSearch::Model

  validates :description, presence: true
  validates :guid, presence: true, uniqueness: true
  validates :image_url, presence: true
  validates :link, presence: true
  validates :publication_date, presence: true
  validates :title, presence: true


  pg_search_scope :search_by_title_and_description, 
                  against: [:title, :description],
                  using: {
                    tsearch: { prefix: true },
                    trigram: {}
                  }
end
