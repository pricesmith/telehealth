# frozen_string_literal: true

require 'securerandom'

class CardsController < ActionController::Base
  def create
    params[:uuid] = SecureRandom.uuid unless params[:uuid]
    card = Card.create!(card_params)
    head 200 if card
  end

  def show
    # cards = Card.all
    # cards_list = cards.map do |card|
    #   {
    #     uuid: card.uuid,
    #     image: url_for(card.image),
    #     content: card.content.body
    #   }
    # end
    # render json: {
    #   "tacting": {
    #     title: 'tacting',
    #     facets: cards_list
    #   }
    # }

    cards = Card.all
    cards_list = cards.map do |card|
      image = url_for(card.image) if card.image.attached?
      {
        title: 'tacting',
        uuid: card.uuid,
        facets: [{
          image: image,
          content: card.content.body
        }]
      }
    end

    render json: cards_list
  end

  private

  def card_params
    params.permit(:uuid, :content, :image)
  end
end
