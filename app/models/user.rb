class User < ApplicationRecord
  has_many :appts
  has_many :doctors, through: :appts

  validates :first_name, :last_name, :phone, presence: true
end
