class Doctor < ApplicationRecord
  has_many :appts
  has_many :users, through: :appts
  
  validates :first_name, :last_name, :phone, presence: true
end
