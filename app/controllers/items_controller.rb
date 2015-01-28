class ItemsController < ApplicationController
  def new_item
    return if params.blank?

    render partial: params[:item_type]
  end

  def minus_order
    puts ">>>>>>> #{params}"
  end

  def plus_order
    puts ">>>>>>> #{params}"
  end

  def sort_order
    puts ">>>>>>> #{params}"
  end

end
